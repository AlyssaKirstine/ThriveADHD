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
        response = Response.genQuickReply(i18n.__("mentee_form_about.prompt"), [
                {
                    title: i18n.__("mentee_form.me"),
                    payload: "MENTEEFORM_ME"
                  },
                  {
                    title: i18n.__("mentee_form.someoneElse"),
                    payload: "MENTEEFORM_ELSE"
                  }
            ]);
        break;

      case "MENTEEFORM_ME":
          response = Response.genQuickReply(i18n.__("mentee_form.mePrompt"), [
            {
                title: i18n.__("mentee_form.findPal"),
                payload: "MENTEEFORM_PAL"
            },
            {
                title: i18n.__("mentee_form.askQuestions"),
                payload: "MENTEEFORM_QUESTIONS"
            },
            {
                title: i18n.__("mentee_form.getHelp"),
                payload: "MENTEEFORM_HELP"
            }
            ]);
        break;

      case "MENTEEFORM_ELSE":
            response = Response.genQuickReply(i18n.__("mentee_form.relationship"), [
                {
                    title: i18n.__("mentee_form.child"),
                    payload: "MENTEEFORM_CHILD"
                },
                {
                    title: i18n.__("mentee_form.student"),
                    payload: "MENTEEFORM_STUDENT"
                },
                {
                    title: i18n.__("mentee_form.partner"),
                    payload: "MENTEEFORM_PARTNER"
                },
                {
                    title: i18n.__("mentee_form.familyfriend"),
                    payload: "MENTEEFORM_FAMILYFRIEND"
                },
                {
                    title: i18n.__("mentee_form.patient"),
                    payload: "MENTEEFORM_PATIENT"
                }
            ]);
            break;

        case "MENTEEFORM_CHILD":
        case "MENTEEFORM_STUDENT":
        case "MENTEEFORM_PARTNER":
        case "MENTEEFORM_FAMILYFRIEND":
        case "MENTEEFORM_PATIENT":
            response = this.genResource(payload);
            break;

        case "MENTEEFORM_PAL":
            response = [
                Response.genText(i18n.__("mentee_form.aboutPal1")),
                Response.genText(i18n.__("mentee_form.aboutPal2")),
                Response.genText(i18n.__("mentor_form_about.positive")),
                Response.genQuickReply(i18n.__("mentor_form.gender"), [
                    {
                      title: i18n.__("mentor_form.male"),
                      payload: "MENTEEFORM_GENDER_MALE"
                    },
                    {
                      title: i18n.__("mentor_form.female"),
                      payload: "MENTEEFORM_GENDER_FEMALE"
                    }
                ])
            ];
            break;

        // Gender
      case "MENTEEFORM_GENDER_MALE":
            user.gender = "male";
            response = Response.genQuickReply(i18n.__("mentor_form.age"), [
              {
                title: i18n.__("mentor_form.0-14"),
                payload: "MENTEEFORM_AGE_0-14"
              },
              {
                title: i18n.__("mentor_form.15-24"),
                payload: "MENTEEFORM_AGE_15-24"
              },
              {
                title: i18n.__("mentor_form.25-64"),
                payload: "MENTEEFORM_AGE_25-64"
              },
              {
                title: i18n.__("mentor_form.65-"),
                payload: "MENTEEFORM_AGE_65-"
              }
            ]);
            break;
    
          case "MENTEEFORM_GENDER_FEMALE":
            user.gender = "female";
            response = Response.genQuickReply(i18n.__("mentor_form.age"), [
              {
                title: i18n.__("mentor_form.0-14"),
                payload: "MENTEEFORM_AGE_0-14"
              },
              {
                title: i18n.__("mentor_form.15-24"),
                payload: "MENTEEFORM_AGE_15-24"
              },
              {
                title: i18n.__("mentor_form.25-64"),
                payload: "MENTEEFORM_AGE_25-64"
              },
              {
                title: i18n.__("mentor_form.65-"),
                payload: "MENTEEFORM_AGE_65-"
              }
            ]);
            break;
    
        // From age to occupation
          case "MENTEEFORM_AGE_0-14":
            user.age = "0-14";
            response = Response.genQuickReply(i18n.__("mentor_form.occupation"), [
              {
                title: i18n.__("mentor_form.student"),
                payload: "MENTEEFORM_OCCUPATION_STUDENT"
              },
              {
                title: i18n.__("mentor_form.teacher"),
                payload: "MENTEEFORM_OCCUPATION_TEACHER"
              },
              {
                title: i18n.__("mentor_form.engineer"),
                payload: "MENTEEFORM_OCCUPATION_ENGINEER"
              },
              {
                title: i18n.__("mentor_form.other"),
                payload: "MENTEEFORM_OCCUPATION_OTHER"
              }
            ]);
            break;
    
            case "MENTEEFORM_AGE_15-24":
            user.age = "15-24";
            response = Response.genQuickReply(i18n.__("mentor_form.occupation"), [
              {
                title: i18n.__("mentor_form.student"),
                payload: "MENTEEFORM_OCCUPATION_STUDENT"
              },
              {
                title: i18n.__("mentor_form.teacher"),
                payload: "MENTEEFORM_OCCUPATION_TEACHER"
              },
              {
                title: i18n.__("mentor_form.engineer"),
                payload: "MENTEEFORM_OCCUPATION_ENGINEER"
              },
              {
                title: i18n.__("mentor_form.other"),
                payload: "MENTEEFORM_OCCUPATION_OTHER"
              }
            ]);
            break;
    
            case "MENTEEFORM_AGE_25-64":
            user.age = "25-64";
            response = Response.genQuickReply(i18n.__("mentor_form.occupation"), [
              {
                title: i18n.__("mentor_form.student"),
                payload: "MENTEEFORM_OCCUPATION_STUDENT"
              },
              {
                title: i18n.__("mentor_form.teacher"),
                payload: "MENTEEFORM_OCCUPATION_TEACHER"
              },
              {
                title: i18n.__("mentor_form.engineer"),
                payload: "MENTEEFORM_OCCUPATION_ENGINEER"
              },
              {
                title: i18n.__("mentor_form.other"),
                payload: "MENTEEFORM_OCCUPATION_OTHER"
              }
            ]);
            break;
    
            case "MENTEEFORM_AGE_65-":
            user.age = "65-";
            response = Response.genQuickReply(i18n.__("mentor_form.occupation"), [
              {
                title: i18n.__("mentor_form.student"),
                payload: "MENTEEFORM_OCCUPATION_STUDENT"
              },
              {
                title: i18n.__("mentor_form.teacher"),
                payload: "MENTEEFORM_OCCUPATION_TEACHER"
              },
              {
                title: i18n.__("mentor_form.engineer"),
                payload: "MENTEEFORM_OCCUPATION_ENGINEER"
              },
              {
                title: i18n.__("mentor_form.other"),
                payload: "MENTEEFORM_OCCUPATION_OTHER"
              }
            ]);
            break;
    
        // From occupation to struggles
          case "MENTEEFORM_OCCUPATION_STUDENT":
            user.occupation = "student";
            response = Response.genQuickReply(i18n.__("mentor_form.struggles"), [
              {
                title: i18n.__("mentor_form.affordability"),
                payload: "MENTEEFORM_STRUGGLES_AFFORDABILITY"
              },
              {
                title: i18n.__("mentor_form.concentration"),
                payload: "MENTEEFORM_STRUGGLES_CONCENTRATION"
              },
              {
                title: i18n.__("mentor_form.accessibility"),
                payload: "MENTEEFORM_STRUGGLES_ACCESSIBILITY"
              },
              {
                title: i18n.__("mentor_form.support"),
                payload: "MENTEEFORM_STRUGGLES_SUPPORT"
              }
            ]);
            break;
    
            case "MENTEEFORM_OCCUPATION_TEACHER":
            user.occupation = "teacher";
            response = Response.genQuickReply(i18n.__("mentor_form.struggles"), [
                {
                title: i18n.__("mentor_form.affordability"),
                payload: "MENTEEFORM_STRUGGLES_AFFORDABILITY"
                },
                {
                title: i18n.__("mentor_form.concentration"),
                payload: "MENTEEFORM_STRUGGLES_CONCENTRATION"
                },
                {
                title: i18n.__("mentor_form.accessibility"),
                payload: "MENTEEFORM_STRUGGLES_ACCESSIBILITY"
                },
                {
                title: i18n.__("mentor_form.support"),
                payload: "MENTEEFORM_STRUGGLES_SUPPORT"
                }
            ]);
            break;
    
            case "MENTEEFORM_OCCUPATION_ENGINEER":
            user.occupation = "engineer";
            response = Response.genQuickReply(i18n.__("mentor_form.struggles"), [
                {
                title: i18n.__("mentor_form.affordability"),
                payload: "MENTEEFORM_STRUGGLES_AFFORDABILITY"
                },
                {
                title: i18n.__("mentor_form.concentration"),
                payload: "MENTEEFORM_STRUGGLES_CONCENTRATION"
                },
                {
                title: i18n.__("mentor_form.accessibility"),
                payload: "MENTEEFORM_STRUGGLES_ACCESSIBILITY"
                },
                {
                title: i18n.__("mentor_form.support"),
                payload: "MENTEEFORM_STRUGGLES_SUPPORT"
                }
            ]);
            break;
    
            case "MENTEEFORM_OCCUPATION_OTHER":
            user.occupation = "other";
            response = Response.genQuickReply(i18n.__("mentor_form.struggles"), [
                {
                title: i18n.__("mentor_form.affordability"),
                payload: "MENTEEFORM_STRUGGLES_AFFORDABILITY"
                },
                {
                title: i18n.__("mentor_form.concentration"),
                payload: "MENTEEFORM_STRUGGLES_CONCENTRATION"
                },
                {
                title: i18n.__("mentor_form.accessibility"),
                payload: "MENTEEFORM_STRUGGLES_ACCESSIBILITY"
                },
                {
                title: i18n.__("mentor_form.support"),
                payload: "MENTEEFORM_STRUGGLES_SUPPORT"
                }
            ]);
            break;
    
        // From struggles to helpers
        case "MENTEEFORM_STRUGGLES_AFFORDABILITY":
        user.struggles = "affordability";
        response = Response.genQuickReply(i18n.__("mentor_form.helpers"), [
            {
            title: i18n.__("mentor_form.counseling"),
            payload: "MENTEEFORM_HELPERS_COUNSELING"
            },
            {
            title: i18n.__("mentor_form.familyfriend"),
            payload: "MENTEEFORM_HELPERS_FAMILYFRIEND"
            },
            {
            title: i18n.__("mentor_form.internet"),
            payload: "MENTEEFORM_HELPERS_INTERNET"
            },
            {
            title: i18n.__("mentor_form.medication"),
            payload: "MENTEEFORM_HELPERS_MEDICATION"
            }
        ]);
        break;
    
        case "MENTEEFORM_STRUGGLES_CONCENTRATION":
        user.struggles = "concentration";
        response = Response.genQuickReply(i18n.__("mentor_form.helpers"), [
            {
            title: i18n.__("mentor_form.counseling"),
            payload: "MENTEEFORM_HELPERS_COUNSELING"
            },
            {
            title: i18n.__("mentor_form.familyfriend"),
            payload: "MENTEEFORM_HELPERS_FAMILYFRIEND"
            },
            {
            title: i18n.__("mentor_form.internet"),
            payload: "MENTEEFORM_HELPERS_INTERNET"
            },
            {
            title: i18n.__("mentor_form.medication"),
            payload: "MENTEEFORM_HELPERS_MEDICATION"
            }
        ]);
        break;
    
        case "MENTEEFORM_STRUGGLES_ACCESSIBILITY":
        user.struggles = "accessibility";
        response = Response.genQuickReply(i18n.__("mentor_form.helpers"), [
            {
            title: i18n.__("mentor_form.counseling"),
            payload: "MENTEEFORM_HELPERS_COUNSELING"
            },
            {
            title: i18n.__("mentor_form.familyfriend"),
            payload: "MENTEEFORM_HELPERS_FAMILYFRIEND"
            },
            {
            title: i18n.__("mentor_form.internet"),
            payload: "MENTEEFORM_HELPERS_INTERNET"
            },
            {
            title: i18n.__("mentor_form.medication"),
            payload: "MENTEEFORM_HELPERS_MEDICATION"
            }
        ]);
        break;
    
        case "MENTEEFORM_STRUGGLES_SUPPORT":
        user.struggles = "support";
        response = Response.genQuickReply(i18n.__("mentor_form.helpers"), [
            {
            title: i18n.__("mentor_form.counseling"),
            payload: "MENTEEFORM_HELPERS_COUNSELING"
            },
            {
            title: i18n.__("mentor_form.familyfriend"),
            payload: "MENTEEFORM_HELPERS_FAMILYFRIEND"
            },
            {
            title: i18n.__("mentor_form.internet"),
            payload: "MENTEEFORM_HELPERS_INTERNET"
            },
            {
            title: i18n.__("mentor_form.medication"),
            payload: "MENTEEFORM_HELPERS_MEDICATION"
            }
        ]);
        break;
    
        // From helpers to end
        case "MENTEEFORM_HELPERS_COUNSELING":
        user.helpers = "counseling";
        response = genPal(payload);
        break;
            
        case "MENTEEFORM_HELPERS_FAMILYFRIEND":
        user.helpers = "familyfriend";
        response = genPal(payload);
        break;
    
        case "MENTEEFORM_HELPERS_INTERNET":
        user.helpers = "internet";
        response = genPal(payload);
        break;
    
        case "MENTEEFORM_HELPERS_MEDICATION":
        user.helpers = "medication";
        response = genPal(payload);
        break;

        // 

        case "MENTEEFORM_QUESTIONS":

        case "MENTEEFORM_HELP":

    }

    return response;
  }

  genPal(payload) {
      // TODO
  }

  genResource(payload) {
    let response = Response.genGenericTemplate(
        `https://www.7cups.com/member/`,
        "7 Cups of Tea",
        "You can access free support from peers on 7 Cups of Tea or you can choose to pay to speak to a professional.",
        [
            Response.genWebUrlButton(
            i18n.__("mentee_form.readMore"),
            `https://www.7cups.com/member/`
            ),
            Response.genPostbackButton(
            i18n.__("mentee_form.showAnother"),
            "MENTEE_FORM_OTHER"
            )
        ]
    );

    return response;
  }
};