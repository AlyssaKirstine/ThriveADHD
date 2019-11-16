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

      case "MENTORFORM_GENDER_MALE":
        // Store the user budget preference here
        response = Response.genQuickReply(i18n.__("curation.price"), [
          {
            title: "~ $20",
            payload: "CURATION_BUDGET_20_WORK"
          },
          {
            title: "~ $30",
            payload: "CURATION_BUDGET_30_WORK"
          },
          {
            title: "+ $50",
            payload: "CURATION_BUDGET_50_WORK"
          }
        ]);
        break;

      case "CURATION_OCASION_DINNER":
        // Store the user budget preference here
        response = Response.genQuickReply(i18n.__("curation.price"), [
          {
            title: "~ $20",
            payload: "CURATION_BUDGET_20_DINNER"
          },
          {
            title: "~ $30",
            payload: "CURATION_BUDGET_30_DINNER"
          },
          {
            title: "+ $50",
            payload: "CURATION_BUDGET_50_DINNER"
          }
        ]);
        break;

      case "CURATION_OCASION_PARTY":
        // Store the user budget preference here
        response = Response.genQuickReply(i18n.__("curation.price"), [
          {
            title: "~ $20",
            payload: "CURATION_BUDGET_20_PARTY"
          },
          {
            title: "~ $30",
            payload: "CURATION_BUDGET_30_PARTY"
          },
          {
            title: "+ $50",
            payload: "CURATION_BUDGET_50_PARTY"
          }
        ]);
        break;

      case "CURATION_BUDGET_20_WORK":
      case "CURATION_BUDGET_30_WORK":
      case "CURATION_BUDGET_50_WORK":
      case "CURATION_BUDGET_20_DINNER":
      case "CURATION_BUDGET_30_DINNER":
      case "CURATION_BUDGET_50_DINNER":
      case "CURATION_BUDGET_20_PARTY":
      case "CURATION_BUDGET_30_PARTY":
      case "CURATION_BUDGET_50_PARTY":
        response = this.genCurationResponse(payload);
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