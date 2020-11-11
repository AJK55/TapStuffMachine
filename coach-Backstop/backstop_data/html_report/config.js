report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Coach_Homepage_0_html_0_phone.png",
        "test": "..\\bitmaps_test\\20200602-165901\\backstop_default_Coach_Homepage_0_html_0_phone.png",
        "selector": "html",
        "fileName": "backstop_default_Coach_Homepage_0_html_0_phone.png",
        "label": "Coach Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://www.coach.com/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -246
          },
          "misMatchPercentage": "19.40",
          "analysisTime": 127
        },
        "diffImage": "..\\bitmaps_test\\20200602-165901\\failed_diff_backstop_default_Coach_Homepage_0_html_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Coach_Homepage_0_html_1_tablet.png",
        "test": "..\\bitmaps_test\\20200602-165901\\backstop_default_Coach_Homepage_0_html_1_tablet.png",
        "selector": "html",
        "fileName": "backstop_default_Coach_Homepage_0_html_1_tablet.png",
        "label": "Coach Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://www.coach.com/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "engineErrorMsg": "waiting for selector \"div.bx-slab > div\" failed: timeout 30000ms exceeded",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -792,
            "height": -5896
          },
          "misMatchPercentage": "0.66",
          "analysisTime": 115
        },
        "diffImage": "..\\bitmaps_test\\20200602-165901\\failed_diff_backstop_default_Coach_Homepage_0_html_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Coach_Homepage_0_html_2_Desktop.png",
        "test": "..\\bitmaps_test\\20200602-165901\\backstop_default_Coach_Homepage_0_html_2_Desktop.png",
        "selector": "html",
        "fileName": "backstop_default_Coach_Homepage_0_html_2_Desktop.png",
        "label": "Coach Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://www.coach.com/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "Desktop",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -231
          },
          "misMatchPercentage": "18.57",
          "analysisTime": 199
        },
        "diffImage": "..\\bitmaps_test\\20200602-165901\\failed_diff_backstop_default_Coach_Homepage_0_html_2_Desktop.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});