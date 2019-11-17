/**
 * Copyright 2019-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Messenger For Original Coast Clothing
 * https://developers.facebook.com/docs/messenger-platform/getting-started/sample-apps/original-coast-clothing
 */

"use strict";

// Imports dependencies
const Response = require("./response"),
  config = require("./config"),
  i18n = require("../i18n.config");

module.exports = class MentorForm {
  constructor(user, webhookEvent) {
    this.user = user;
    this.webhookEvent = webhookEvent;
  }

  handlePayload(payload) {
    let response;
    let user = new Object();

    switch (payload) {
      case "MENTORFORM":
        response = [
          Response.genText(i18n.__("mentor_form_about.prompt1")),
          Response.genText(i18n.__("mentor_form_about.prompt2")),
          Response.genQuickReply(i18n.__("mentor_form_about.prompt3"), [
            {
              title: i18n.__("mentor_form_about.yes"),
              payload: "MENTORFORM_PAL"
            },
            {
              title: i18n.__("mentor_form_about.no"),
              payload: "MENTORFORM_NOPAL"
            }
          ])
        ];
        break;

      case "MENTORFORM_PAL":
        response = [
          Response.genText(i18n.__("mentor_form_about.positive")),
          Response.genQuickReply(i18n.__("mentor_form.gender"), [
            {
              title: i18n.__("mentor_form.male"),
              payload: "MENTORFORM_GENDER_MALE"
            },
            {
              title: i18n.__("mentor_form.female"),
              payload: "MENTORFORM_GENDER_FEMALE"
            }
          ])
        ];
        break;


      case "MENTORFORM_NOPAL":
        response = Response.genText(i18n.__("mentor_form_about.negative"));
        break;

      // Gender
      case "MENTORFORM_GENDER_MALE":
        user.gender = "male";
        response = Response.genQuickReply(i18n.__("mentor_form.age"), [
          {
            title: i18n.__("mentor_form.0-14"),
            payload: "MENTORFORM_AGE_0-14"
          },
          {
            title: i18n.__("mentor_form.15-24"),
            payload: "MENTORFORM_AGE_15-24"
          },
          {
            title: i18n.__("mentor_form.25-64"),
            payload: "MENTORFORM_AGE_25-64"
          },
          {
            title: i18n.__("mentor_form.65-"),
            payload: "MENTORFORM_AGE_65-"
          }
        ]);
        break;

      case "MENTORFORM_GENDER_FEMALE":
        user.gender = "female";
        response = Response.genQuickReply(i18n.__("mentor_form.age"), [
          {
            title: i18n.__("mentor_form.0-14"),
            payload: "MENTORFORM_AGE_0-14"
          },
          {
            title: i18n.__("mentor_form.15-24"),
            payload: "MENTORFORM_AGE_15-24"
          },
          {
            title: i18n.__("mentor_form.25-64"),
            payload: "MENTORFORM_AGE_25-64"
          },
          {
            title: i18n.__("mentor_form.65-"),
            payload: "MENTORFORM_AGE_65-"
          }
        ]);
        break;

      // From age to occupation
      case "MENTORFORM_AGE_0-14":
        user.age = "0-14";
        response = Response.genQuickReply(i18n.__("mentor_form.occupation"), [
          {
            title: i18n.__("mentor_form.student"),
            payload: "MENTORFORM_OCCUPATION_STUDENT"
          },
          {
            title: i18n.__("mentor_form.teacher"),
            payload: "MENTORFORM_OCCUPATION_TEACHER"
          },
          {
            title: i18n.__("mentor_form.engineer"),
            payload: "MENTORFORM_OCCUPATION_ENGINEER"
          },
          {
            title: i18n.__("mentor_form.other"),
            payload: "MENTORFORM_OCCUPATION_OTHER"
          }
        ]);
        break;

      case "MENTORFORM_AGE_15-24":
        user.age = "15-24";
        response = Response.genQuickReply(i18n.__("mentor_form.occupation"), [
          {
            title: i18n.__("mentor_form.student"),
            payload: "MENTORFORM_OCCUPATION_STUDENT"
          },
          {
            title: i18n.__("mentor_form.teacher"),
            payload: "MENTORFORM_OCCUPATION_TEACHER"
          },
          {
            title: i18n.__("mentor_form.engineer"),
            payload: "MENTORFORM_OCCUPATION_ENGINEER"
          },
          {
            title: i18n.__("mentor_form.other"),
            payload: "MENTORFORM_OCCUPATION_OTHER"
          }
        ]);
        break;

      case "MENTORFORM_AGE_25-64":
        user.age = "25-64";
        response = Response.genQuickReply(i18n.__("mentor_form.occupation"), [
          {
            title: i18n.__("mentor_form.student"),
            payload: "MENTORFORM_OCCUPATION_STUDENT"
          },
          {
            title: i18n.__("mentor_form.teacher"),
            payload: "MENTORFORM_OCCUPATION_TEACHER"
          },
          {
            title: i18n.__("mentor_form.engineer"),
            payload: "MENTORFORM_OCCUPATION_ENGINEER"
          },
          {
            title: i18n.__("mentor_form.other"),
            payload: "MENTORFORM_OCCUPATION_OTHER"
          }
        ]);
        break;

      case "MENTORFORM_AGE_65-":
        user.age = "65-";
        response = Response.genQuickReply(i18n.__("mentor_form.occupation"), [
          {
            title: i18n.__("mentor_form.student"),
            payload: "MENTORFORM_OCCUPATION_STUDENT"
          },
          {
            title: i18n.__("mentor_form.teacher"),
            payload: "MENTORFORM_OCCUPATION_TEACHER"
          },
          {
            title: i18n.__("mentor_form.engineer"),
            payload: "MENTORFORM_OCCUPATION_ENGINEER"
          },
          {
            title: i18n.__("mentor_form.other"),
            payload: "MENTORFORM_OCCUPATION_OTHER"
          }
        ]);
        break;

      // From occupation to struggles
      case "MENTORFORM_OCCUPATION_STUDENT":
        user.occupation = "student";
        response = Response.genQuickReply(i18n.__("mentor_form.struggles"), [
          {
            title: i18n.__("mentor_form.affordability"),
            payload: "MENTORFORM_STRUGGLES_AFFORDABILITY"
          },
          {
            title: i18n.__("mentor_form.concentration"),
            payload: "MENTORFORM_STRUGGLES_CONCENTRATION"
          },
          {
            title: i18n.__("mentor_form.accessibility"),
            payload: "MENTORFORM_STRUGGLES_ACCESSIBILITY"
          },
          {
            title: i18n.__("mentor_form.support"),
            payload: "MENTORFORM_STRUGGLES_SUPPORT"
          }
        ]);
        break;

      case "MENTORFORM_OCCUPATION_TEACHER":
        user.occupation = "teacher";
        response = Response.genQuickReply(i18n.__("mentor_form.struggles"), [
          {
            title: i18n.__("mentor_form.affordability"),
            payload: "MENTORFORM_STRUGGLES_AFFORDABILITY"
          },
          {
            title: i18n.__("mentor_form.concentration"),
            payload: "MENTORFORM_STRUGGLES_CONCENTRATION"
          },
          {
            title: i18n.__("mentor_form.accessibility"),
            payload: "MENTORFORM_STRUGGLES_ACCESSIBILITY"
          },
          {
            title: i18n.__("mentor_form.support"),
            payload: "MENTORFORM_STRUGGLES_SUPPORT"
          }
        ]);
        break;

      case "MENTORFORM_OCCUPATION_ENGINEER":
        user.occupation = "engineer";
        response = Response.genQuickReply(i18n.__("mentor_form.struggles"), [
          {
            title: i18n.__("mentor_form.affordability"),
            payload: "MENTORFORM_STRUGGLES_AFFORDABILITY"
          },
          {
            title: i18n.__("mentor_form.concentration"),
            payload: "MENTORFORM_STRUGGLES_CONCENTRATION"
          },
          {
            title: i18n.__("mentor_form.accessibility"),
            payload: "MENTORFORM_STRUGGLES_ACCESSIBILITY"
          },
          {
            title: i18n.__("mentor_form.support"),
            payload: "MENTORFORM_STRUGGLES_SUPPORT"
          }
        ]);
        break;

      case "MENTORFORM_OCCUPATION_OTHER":
        user.occupation = "other";
        response = Response.genQuickReply(i18n.__("mentor_form.struggles"), [
          {
            title: i18n.__("mentor_form.affordability"),
            payload: "MENTORFORM_STRUGGLES_AFFORDABILITY"
          },
          {
            title: i18n.__("mentor_form.concentration"),
            payload: "MENTORFORM_STRUGGLES_CONCENTRATION"
          },
          {
            title: i18n.__("mentor_form.accessibility"),
            payload: "MENTORFORM_STRUGGLES_ACCESSIBILITY"
          },
          {
            title: i18n.__("mentor_form.support"),
            payload: "MENTORFORM_STRUGGLES_SUPPORT"
          }
        ]);
        break;

      // From struggles to helpers
      case "MENTORFORM_STRUGGLES_AFFORDABILITY":
        user.struggles = "affordability";
        response = Response.genQuickReply(i18n.__("mentor_form.helpers"), [
          {
            title: i18n.__("mentor_form.counseling"),
            payload: "MENTORFORM_HELPERS_COUNSELING"
          },
          {
            title: i18n.__("mentor_form.familyfriend"),
            payload: "MENTORFORM_HELPERS_FAMILYFRIEND"
          },
          {
            title: i18n.__("mentor_form.internet"),
            payload: "MENTORFORM_HELPERS_INTERNET"
          },
          {
            title: i18n.__("mentor_form.medication"),
            payload: "MENTORFORM_HELPERS_MEDICATION"
          }
        ]);
        break;

      case "MENTORFORM_STRUGGLES_CONCENTRATION":
        user.struggles = "concentration";
        response = Response.genQuickReply(i18n.__("mentor_form.helpers"), [
          {
            title: i18n.__("mentor_form.counseling"),
            payload: "MENTORFORM_HELPERS_COUNSELING"
          },
          {
            title: i18n.__("mentor_form.familyfriend"),
            payload: "MENTORFORM_HELPERS_FAMILYFRIEND"
          },
          {
            title: i18n.__("mentor_form.internet"),
            payload: "MENTORFORM_HELPERS_INTERNET"
          },
          {
            title: i18n.__("mentor_form.medication"),
            payload: "MENTORFORM_HELPERS_MEDICATION"
          }
        ]);
        break;

      case "MENTORFORM_STRUGGLES_ACCESSIBILITY":
        user.struggles = "accessibility";
        response = Response.genQuickReply(i18n.__("mentor_form.helpers"), [
          {
            title: i18n.__("mentor_form.counseling"),
            payload: "MENTORFORM_HELPERS_COUNSELING"
          },
          {
            title: i18n.__("mentor_form.familyfriend"),
            payload: "MENTORFORM_HELPERS_FAMILYFRIEND"
          },
          {
            title: i18n.__("mentor_form.internet"),
            payload: "MENTORFORM_HELPERS_INTERNET"
          },
          {
            title: i18n.__("mentor_form.medication"),
            payload: "MENTORFORM_HELPERS_MEDICATION"
          }
        ]);
        break;

      case "MENTORFORM_STRUGGLES_SUPPORT":
        user.struggles = "support";
        response = Response.genQuickReply(i18n.__("mentor_form.helpers"), [
          {
            title: i18n.__("mentor_form.counseling"),
            payload: "MENTORFORM_HELPERS_COUNSELING"
          },
          {
            title: i18n.__("mentor_form.familyfriend"),
            payload: "MENTORFORM_HELPERS_FAMILYFRIEND"
          },
          {
            title: i18n.__("mentor_form.internet"),
            payload: "MENTORFORM_HELPERS_INTERNET"
          },
          {
            title: i18n.__("mentor_form.medication"),
            payload: "MENTORFORM_HELPERS_MEDICATION"
          }
        ]);
        break;

      // From helpers to end
      case "MENTORFORM_HELPERS_COUNSELING":
        user.helpers = "counseling";
        console.log(user)
        response = [
          Response.genText(i18n.__("mentor_form.end1")),
          Response.genText(i18n.__("mentor_form.end2")),
        ];
        break;

      case "MENTORFORM_HELPERS_FAMILYFRIEND":
        user.helpers = "familyfriend";
        console.log(user)
        response = [
          Response.genText(i18n.__("mentor_form.end1")),
          Response.genText(i18n.__("mentor_form.end2")),
        ];
        break;

      case "MENTORFORM_HELPERS_INTERNET":
        user.helpers = "internet";
        console.log(user)
        response = [
          Response.genText(i18n.__("mentor_form.end1")),
          Response.genText(i18n.__("mentor_form.end2")),
        ];
        break;

      case "MENTORFORM_HELPERS_MEDICATION":
        user.helpers = "medication";
        console.log(user)
        response = [
          Response.genText(i18n.__("mentor_form.end1")),
          Response.genText(i18n.__("mentor_form.end2")),
        ];
        break;


      case "CURATION_OTHER_STYLE":
        // Build the recommendation logic here
        outfit = `${this.user.gender}-${this.randomOutfit()}`;

        response = Response.genGenericTemplate(
          `${config.appUrl}/styles/${outfit}.jpg`,
          i18n.__("curation.title"),
          i18n.__("curation.subtitle"),
          [
            Response.genWebUrlButton(
              i18n.__("curation.shop"),
              `${config.shopUrl}/products/${outfit}`
            ),
            Response.genPostbackButton(
              i18n.__("curation.show"),
              "CURATION_OTHER_STYLE"
            )
          ]
        );
        break;
    }

    return response;

  }

  genCurationResponse(payload) {
    let occasion = payload.split("_")[3].toLowerCase();
    let budget = payload.split("_")[2].toLowerCase();
    let outfit = `${this.user.gender}-${occasion}`;

    let buttons = [
      Response.genWebUrlButton(
        i18n.__("curation.shop"),
        `${config.shopUrl}/products/${outfit}`
      ),
      Response.genPostbackButton(
        i18n.__("curation.show"),
        "CURATION_OTHER_STYLE"
      )
    ];

    if (budget === "50") {
      buttons.push(
        Response.genPostbackButton(i18n.__("curation.sales"), "CARE_SALES")
      );
    }

    let response = Response.genGenericTemplate(
      `${config.appUrl}/styles/${outfit}.jpg`,
      i18n.__("curation.title"),
      i18n.__("curation.subtitle"),
      buttons
    );

    return response;
  }

  randomOutfit() {
    let occasion = ["work", "party", "dinner"];
    let randomIndex = Math.floor(Math.random() * occasion.length);

    return occasion[randomIndex];
  }
};