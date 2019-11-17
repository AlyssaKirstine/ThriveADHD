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

module.exports = class MenteeForm {
  constructor(user, webhookEvent) {
    this.user = user;
    this.webhookEvent = webhookEvent;
  }

  handlePayload(payload) {
    let response;
    let user;
    
    switch (payload) {
      case "MENTEEFORM":
        response = [
            Response.genText("A pal is is someone who supports  others who struggle with ADHD."),
            Response.genText("When you’re matched with a pal, you will be given access to their Facebook profile and you can message them there."),
            Response.genText("We first need to ask you some questions about yourself to pair you with an appropriate pal."),
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

    case "MENTORFORM_STRUGGLES_CONCENTATION":
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
    case "MENTORFORM_HELPERS_FAMILYFRIEND":
    case "MENTORFORM_HELPERS_INTERNET":
    case "MENTORFORM_HELPERS_MEDICATION":
    response = [
        Response.genText("Thank you for sharing this information. You were matched with the following pal."),
        Response.genGenericTemplate(
          `https://www.facebook.com/alyssakirstine.m`,
          "Alyssa Melendez",
          "Female",
          [
            Response.genWebUrlButton(
              "Message Alyssa",
              `https://www.facebook.com/alyssakirstine.m`
            ),
            Response.genPostbackButton(
              "See another pal",
              "MENTORFORM_HELPERS_COUNSELING"
            )
          ]
        ),
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