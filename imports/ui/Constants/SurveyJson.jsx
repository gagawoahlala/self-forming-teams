export const SURVEY_PERSONALITY = {
 focusFirstQuestionAutomatic: false,
 locale: "en",
 pages: [
  {
   elements: [
    {
     type: "html",
     name: "Consent Form",
     html: "<h2>Consent Form for Research Study</h2>\n  <p>This survey is part of a research study on <b>Team Formation</b>. This study is being done by Andrew Dennis, Markus Duecker and Dr. Steven Dow from the<b> University of California - San Diego (UCSD).</b> You were recruited for this study through Amazon Mechanical Turk,<b> you're taking part in it voluntarily</b> and <b>you’re at least 18 years old.</b><br><br>\n\n\nThere may or may not be any direct benefit to you from this research. The investigator(s), however, may learn more about<b> how we can better facilitate conflict resolution on group decision-making.</b><br><br>\n\n\nThere are minimal risks associated with this research study. <b> Although you may be asked to provide your nickname, no personal identifier can be accessed outside of the research team. You may also experience some emotional changes, but the risks and discomfort associated with the tasks are no greater than ordinarily encountered in daily life. </b>Research records will be kept confidential to the extent allowed by law and may be reviewed by the UCSD Institutional Review Board. <br><br>\n\n\nYour participation in this study is completely voluntary and you can withdraw at any time by simply exiting the survey. Choosing not to participate or withdrawing will result in no penalty or loss of benefits to which you are entitled. <br><br>\n\n\nIf you have questions about this project you can send us a message through the Amazon Mechanical Turk platform. If you have any questions concerning your rights as a research subject, you may contact the UCSD Human Research Protections Program Office at 858-246-HRPP (+1 858-246-4777). <br><br>\n\n\nBy clicking <b>“Next”</b> below you are indicating that you are at least 18 years old, have read this consent form, and agree to participate in this research study. You may print a copy of this page for your records. \n<br></p>\n"
    }
   ],
   name: "page1"
  },
  {
   elements: [
    {
     type: "radiogroup",
     name: "Q1",
     title: {
      en: "Gender"
     },
     isRequired: true,
     choices: [
      "Male",
      "Female"
     ]
    },
    {
     type: "text",
     name: "Q3",
     title: {
      en: "Age (in years)"
     },
     isRequired: true,
     validators: [
      {
       type: "numeric",
       minValue: 18,
       maxValue: 150
      }
     ]
    },
    {
     type: "text",
     name: "Q5",
     title: {
      en: "Country of Residence"
     },
     isRequired: true
    },
    {
     type: "radiogroup",
     name: "Q7",
     title: {
      en: "What is the highest degree or level of education you have completed?"
     },
     isRequired: true,
     choices: [
      "Less than high school",
      "High school graduate (includes equivalency)",
      "Some college, no degree",
      "Associate's Degree",
      "Bachelor's Degree",
      "Master's Degree",
      "Ph.D.",
      "Currently pursuing a college degree",
      "Other"
     ]
    },
    {
     type: "radiogroup",
     name: "Q6",
     title: {
      en: "Ethnicity"
     },
     isRequired: true,
     choices: [
      "African American",
      "Asian",
      "Hispanic",
      "Pacific Islander",
      "White",
      "Other"
     ]
    },
    {
     type: "radiogroup",
     name: "Q8",
     title: {
      en: "Do you have a job besides working on Amazon Mechanical Turk?"
     },
     isRequired: true,
     choices: [
      "Yes",
      "No"
     ]
    }
   ],
   name: "page2"
  },
  {
   elements: [
    {
     type: "text",
     name: "Q9",
     title: {
      en: "In which field/industry are you working?"
     },
     isRequired: true
    }
   ],
   name: "page3"
  },
  {
   elements: [
    {
     type: "html",
     name: "Mechanical Turk Statistics",
     html: "<h3>Mechanical Turk statistics</h3><br>\n<p>You can look up this information in your MTurk Dashboard:\n<br>\n<a href=\"https://www.mturk.com/mturk/dashboard\">https://www.mturk.com/mturk/dashboard</a></p>"
    },
    {
     type: "text",
     name: "mturk_id",
     title: {
      en: "Mechanical Turk ID"
     },
     isRequired: true
    },
    {
     type: "dropdown",
     name: "Q10",
     title: {
      en: "Registered on Mechanical Turk since:"
     },
     isRequired: true,
     choices: [
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017"
     ]
    },
    {
     type: "text",
     name: "Q11",
     title: {
      en: "Number of approved HITs:"
     },
     isRequired: true
    },
    {
     type: "text",
     name: "Q12",
     title: {
      en: "Rate of approved HITs (in %):"
     },
     isRequired: true,
     validators: [
      {
       type: "numeric",
       maxValue: 100
      }
     ]
    }
   ],
   name: "page4"
  },
  {
   elements: [
    {
     type: "html",
     name: "Personality Test",
     html: "<h3>Personality Test</h3>\n<br>\n<p>You will be shown 44 personality statements. Please specify for each statement how much you agree with it on a scale of 1-5, where \n<br><br>\n1 = Strongly disagree <br>\n2 = Somewhat disagree <br>\n3 = Neutral (neither agree nor disagree) <br>\n4 = Somewhat Agree <br>\n5 = Strongly agree\n\n"
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     name: "Example",
     rows: [
      "Likes to work in a team with others"
     ],
     title: "Example:\nI see Myself as Someone Who..."
    }
   ],
   name: "page5"
  },
  {
   elements: [
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q70_6",
     rows: [
      "Is talkative"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q70_7",
     rows: [
      "Tends to find fault with others"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q70_8",
     rows: [
      "Does a thorough job"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q70_9",
     rows: [
      "Is depressed, blue"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q70_10",
     rows: [
      "Is original, comes up with new ideas"
     ],
     title: "I see Myself as Someone Who..."
    }
   ],
   name: "page6"
  },
  {
   elements: [
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q71_1",
     rows: [
      "Is reserved"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q71_2",
     rows: [
      "Is helpful and unselfish with others"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q71_3",
     rows: [
      "Can be somewhat careless"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q71_4",
     rows: [
      "Is relaxed, handles stress well"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q71_5",
     rows: [
      "Is curious about many different things"
     ],
     title: "I see Myself as Someone Who..."
    }
   ],
   name: "page7"
  },
  {
   elements: [
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q78_4",
     rows: [
      "Is full of energy"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q78_5",
     rows: [
      "Starts quarrels with others"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q78_6",
     rows: [
      "Is a reliable worker"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q78_7",
     rows: [
      "Can be tense"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q78_8",
     rows: [
      "Is ingenious, a deep thinker"
     ],
     title: "I see Myself as Someone Who..."
    }
   ],
   name: "page8"
  },
  {
   elements: [
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q79_4",
     rows: [
      "Generates a lot of enthusiasm"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q79_5",
     rows: [
      "Has a forgiving nature"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q79_6",
     rows: [
      "Tends to be disorganized"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q79_7",
     rows: [
      "Worries a lot"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q79_8",
     rows: [
      "Has an active imagination"
     ],
     title: "I see Myself as Someone Who..."
    }
   ],
   name: "page9"
  },
  {
   elements: [
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q80_4",
     rows: [
      "Tends to be quiet"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q80_5",
     rows: [
      "Is generally trusting"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q80_6",
     rows: [
      "Tends to be lazy"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q80_7",
     rows: [
      "Is emotionally stable, not easily upset"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q80_8",
     rows: [
      "Is inventive"
     ],
     title: "I see Myself as Someone Who..."
    }
   ],
   name: "page10"
  },
  {
   elements: [
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q81_4",
     rows: [
      "Has an assertive personality"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q81_5",
     rows: [
      "Can be cold and aloof"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q81_6",
     rows: [
      "Perseveres until the task is finished"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q81_7",
     rows: [
      "Can be moody"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q81_8",
     rows: [
      "Values artistic, aesthetic experiences"
     ],
     title: "I see Myself as Someone Who..."
    }
   ],
   name: "page11"
  },
  {
   elements: [
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q82_4",
     rows: [
      "Is sometimes shy, inhibited"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q82_5",
     rows: [
      "Is considerate and kind to almost everyone"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q82_6",
     rows: [
      "Does things efficiently"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q82_7",
     rows: [
      "Remains calm in tense situations"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q82_8",
     rows: [
      "Prefers work that is routine"
     ],
     title: "I see Myself as Someone Who..."
    }
   ],
   name: "page12"
  },
  {
   elements: [
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q83_4",
     rows: [
      "Is outgoing, sociable"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q83_5",
     rows: [
      "Is sometimes rude to others"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q83_6",
     rows: [
      "Makes plans and follows through with them"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q83_7",
     rows: [
      "Gets nervous easily"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q83_8",
     rows: [
      "Likes to reflect, play with ideas"
     ],
     title: "I see Myself as Someone Who..."
    }
   ],
   name: "page13"
  },
  {
   elements: [
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q84_4",
     rows: [
      "Has few artistic interests"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q84_5",
     rows: [
      "Likes to cooperate with others"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q84_6",
     rows: [
      "Is easily distracted"
     ],
     title: "I see Myself as Someone Who..."
    },
    {
     type: "matrix",
     columns: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
      "Strongly agree"
     ],
     isRequired: true,
     name: "Q84_7",
     rows: [
      "Is sophisticated in art, music, or literature"
     ],
     title: "I see Myself as Someone Who..."
    }
   ],
   name: "page14"
  },
  {
   elements: [
    {
     type: "multipletext",
     itemSize: 29,
     items: [
      {
       name: "Most Important"
      },
      {
       name: "2nd most important"
      },
      {
       name: "3rd most important"
      },
      {
       name: "4th most important"
      },
      {
       name: "5th most important"
      },
      {
       name: "6th most important"
      },
      {
       name: "7th most important"
      }
     ],
     name: "Q99",
     title: {
      en: "What qualities do you look for in a team member? (Fill as many as you need. Write as much as you need for each response, one quality per box.)"
     }
    }
   ],
   name: "page15"
  },
  {
   elements: [
    {
     type: "html",
     name: "question9",
     html: "<h2>Writing Task</h2>\n<p>\nPlease answer the following question, your answer should be <b> at least 500 characters </b> long. You can take as much time as you need. \n<br> <br>\n<h2>Where do you see yourself in 5 years?</h2>\n-Write about your goals for your education, career, family, travel or any other aspect of life. <br>\n-What will be your definition of success in measuring the achievement of those goals? </p>"
    },
    {
     type: "text",
     name: "Q20",
     title: {
      en: "Writing Task"
     },
     isRequired: true
    }
   ],
   name: "page16",
   visible: false
  },
  {
   elements: [
    {
     type: "html",
     name: "question10",
     html: "<h2>Write an advertisement slogan for this electrical bicycle </h2>\n\n<p>-the slogan should be short (1-2 sentences) <br> -it should highlight the product's main benefits and ultimately persuade people to buy it <br> -you can make up a new name and invent realistic features that the bicycle should have\n<br><br>\nAs an example you can look at these slogans that workers generated for a backpack: \n<br>\n<ul>\n<li>\"Backpacking gear that changes the way you hit the road. Get yours and start a journey of a lifetime!\"</li>\n<li>\"The ultimate drawstring backpack that lets you create more epic moments and crush life\"</li>\n<li>\"Fashion meets functionality in one yoga inspired backpack\"</li>\n</ul>\n<br>\nPlease spend <b> 4 minutes </b> on this task until the countdown runs out. <br>\nThe form will then automatically submit your result \n"
    },
    {
     type: "html",
     name: "question13",
     html: {
      en: "<img src=\"http://www.electricvelocity.com.au/Upload/Blogs/smart-e-bike-side_2.jpg\"> </img>"
     }
    },
    {
     type: "text",
     name: "Q86",
     title: {
      en: "Advertisement Slogan"
     }
    }
   ],
   name: "page17",
   startWithNewLine: false,
   visible: false
  },
  {
   elements: [
    {
     type: "html",
     name: "question11",
     html: {
      en: "<p><b>Please write down all the words that you can find in the word puzzle below. </b>All the hidden words are <b>related to Christmas</b> and <b> at least 3 characters long. </b>\n<br><br>\nYou are given 5 minutes on this task until the countdown runs out. <br>\nThe form will then submit automatically. \n\n"
     }
    },
    {
     type: "html",
     name: "question12",
     html: {
      en: "<img src=\"http://www.electricvelocity.com.au/Upload/Blogs/smart-e-bike-side_2.jpg\"> </img>"
     }
    },
    {
     type: "text",
     name: "Q23",
     title: {
      en: "Found words (using one line per word). This form will automatically submit after 5 min countdown has run out"
     }
    }
   ],
   name: "page18",
   visible: false
  }
 ],
 requiredText: "",
 showProgressBar: "bottom",
 showQuestionNumbers: "off"
}

export const SURVEY_TASK = {
 focusFirstQuestionAutomatic: false,
 locale: "en",
 pages: [
  {
   elements: [
    {
     type: "html",
     html: "<h2>Write an advertisement slogan for this electrical bicycle </h2>\n\n<p>-the slogan should be short (1-2 sentences) <br> -it should highlight the product's main benefits and ultimately persuade people to buy it <br> -you can make up a new name and invent realistic features that the bicycle should have\n<br><br>\nAs an example you can look at these slogans that workers generated for a backpack: \n<br>\n<ul>\n<li>\"Backpacking gear that changes the way you hit the road. Get yours and start a journey of a lifetime!\"</li>\n<li>\"The ultimate drawstring backpack that lets you create more epic moments and crush life\"</li>\n<li>\"Fashion meets functionality in one yoga inspired backpack\"</li>\n</ul>\n<br>\nPlease spend <b> 4 minutes </b> on this task until the countdown runs out. <br>\nThe form will then automatically submit your result \n",
     name: "question10"
    },
    {
     type: "html",
     html: {
      en: "<img src=\"http://www.electricvelocity.com.au/Upload/Blogs/smart-e-bike-side_2.jpg\"> </img>"
     },
     name: "question13"
    },
    {
     type: "text",
     name: "Q86",
     title: {
      en: "Advertisement Slogan"
     }
    }
   ],
   name: "page16",
   startWithNewLine: false
  }
 ],
 requiredText: "",
 showProgressBar: "bottom",
 showQuestionNumbers: "off"
}

export const SURVEY_TASK_TEST = {
 focusFirstQuestionAutomatic: false,
 locale: "en",
 pages: [
  {
   elements: [
    {
     type: "html",
     name: "Consent Form",
     html: "<h2>Consent Form for Research Study</h2>\n  <p>This survey is part of a research study on <b>Team Formation</b>. This study is being done by Andrew Dennis, Markus Duecker and Dr. Steven Dow from the<b> University of California - San Diego (UCSD).</b> You were recruited for this study through Amazon Mechanical Turk,<b> you're taking part in it voluntarily</b> and <b>you’re at least 18 years old.</b><br><br>\n\n\nThere may or may not be any direct benefit to you from this research. The investigator(s), however, may learn more about<b> how we can better facilitate conflict resolution on group decision-making.</b><br><br>\n\n\nThere are minimal risks associated with this research study. <b> Although you may be asked to provide your nickname, no personal identifier can be accessed outside of the research team. You may also experience some emotional changes, but the risks and discomfort associated with the tasks are no greater than ordinarily encountered in daily life. </b>Research records will be kept confidential to the extent allowed by law and may be reviewed by the UCSD Institutional Review Board. <br><br>\n\n\nYour participation in this study is completely voluntary and you can withdraw at any time by simply exiting the survey. Choosing not to participate or withdrawing will result in no penalty or loss of benefits to which you are entitled. <br><br>\n\n\nIf you have questions about this project you can send us a message through the Amazon Mechanical Turk platform. If you have any questions concerning your rights as a research subject, you may contact the UCSD Human Research Protections Program Office at 858-246-HRPP (+1 858-246-4777). <br><br>\n\n\nBy clicking <b>“Next”</b> below you are indicating that you are at least 18 years old, have read this consent form, and agree to participate in this research study. You may print a copy of this page for your records. \n<br></p>\n"
    }
   ],
   name: "page1"
  },
  {
   elements: [
    {
     type: "radiogroup",
     name: "Q1",
     title: {
      en: "Gender"
     },
     isRequired: true,
     choices: [
      "Male",
      "Female"
     ]
    },
    {
     type: "text",
     name: "Q3",
     title: {
      en: "Age (in years)"
     },
     isRequired: true,
     validators: [
      {
       type: "numeric",
       minValue: 18,
       maxValue: 150
      }
     ]
    },
    {
     type: "text",
     name: "Q5",
     title: {
      en: "Country of Residence"
     },
     isRequired: true
    },
    {
     type: "radiogroup",
     name: "Q7",
     title: {
      en: "What is the highest degree or level of education you have completed?"
     },
     isRequired: true,
     choices: [
      "Less than high school",
      "High school graduate (includes equivalency)",
      "Some college, no degree",
      "Associate's Degree",
      "Bachelor's Degree",
      "Master's Degree",
      "Ph.D.",
      "Currently pursuing a college degree",
      "Other"
     ]
    },
    {
     type: "radiogroup",
     name: "Q6",
     title: {
      en: "Ethnicity"
     },
     isRequired: true,
     choices: [
      "African American",
      "Asian",
      "Hispanic",
      "Pacific Islander",
      "White",
      "Other"
     ]
    },
    {
     type: "radiogroup",
     name: "Q8",
     title: {
      en: "Do you have a job besides working on Amazon Mechanical Turk?"
     },
     isRequired: true,
     choices: [
      "Yes",
      "No"
     ]
    }
   ],
   name: "page2"
  }
 ],
 requiredText: "",
 showProgressBar: "bottom",
 showQuestionNumbers: "off"
}
