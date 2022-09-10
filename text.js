Webflow.require("ix2").init({
    events: {
      "e-7": {
        id: "e-7",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GROW_EFFECT",
          instant: false,
          config: { actionListId: "growIn", autoStopEventId: "e-137" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "e89551e9-b5ae-51a6-c418-02c90497790c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "e89551e9-b5ae-51a6-c418-02c90497790c",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: null,
          effectIn: true,
        },
        createdOn: 1538219164533,
      },
      "e-9": {
        id: "e-9",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GROW_EFFECT",
          instant: false,
          config: { actionListId: "growIn", autoStopEventId: "e-135" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6e1d3527-5090-7380-17f7-30bf0f5a58b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6e1d3527-5090-7380-17f7-30bf0f5a58b4",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: null,
          effectIn: true,
        },
        createdOn: 1538226223996,
      },
      "e-18": {
        id: "e-18",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-3",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-17",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460f54232368c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460f54232368c",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1538634599170,
      },
      "e-25": {
        id: "e-25",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GROW_EFFECT",
          instant: false,
          config: { actionListId: "growIn", autoStopEventId: "e-26" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460f54232368c|eaff9f8d-69e6-9e6f-5d07-e920521f8531",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460f54232368c|eaff9f8d-69e6-9e6f-5d07-e920521f8531",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: null,
          effectIn: true,
        },
        createdOn: 1538646072320,
      },
      "e-52": {
        id: "e-52",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-5",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-51",
          },
        },
        mediaQueries: ["main"],
        target: {
          id: "62824b29d52460f54232368c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460f54232368c",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: true,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1540635713567,
      },
      "e-68": {
        id: "e-68",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "POP_EFFECT",
          instant: false,
          config: { actionListId: "pop", autoStopEventId: "e-69" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460bac8323695|c946b60f-9942-3119-f51e-84dce30cefec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460bac8323695|c946b60f-9942-3119-f51e-84dce30cefec",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: null,
        },
        createdOn: 1652960379650,
      },
      "e-70": {
        id: "e-70",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "POP_EFFECT",
          instant: false,
          config: { actionListId: "pop", autoStopEventId: "e-71" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460bac8323695|c8932716-2c36-fc31-876c-634d51c65dcf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460bac8323695|c8932716-2c36-fc31-876c-634d51c65dcf",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: null,
        },
        createdOn: 1652960390978,
      },
      "e-72": {
        id: "e-72",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "POP_EFFECT",
          instant: false,
          config: { actionListId: "pop", autoStopEventId: "e-73" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460bac8323695|648a40b9-f32c-c298-1bee-cb29752f5b59",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460bac8323695|648a40b9-f32c-c298-1bee-cb29752f5b59",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: null,
        },
        createdOn: 1652960397563,
      },
      "e-74": {
        id: "e-74",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "POP_EFFECT",
          instant: false,
          config: { actionListId: "pop", autoStopEventId: "e-75" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460bac8323695|cb3f6556-d17f-981b-54e8-24694c09ace9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460bac8323695|cb3f6556-d17f-981b-54e8-24694c09ace9",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: null,
        },
        createdOn: 1652960404096,
      },
      "e-76": {
        id: "e-76",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "POP_EFFECT",
          instant: false,
          config: { actionListId: "pop", autoStopEventId: "e-77" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "b2442867-8c76-d082-dfd1-07b7acc9bc06",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "b2442867-8c76-d082-dfd1-07b7acc9bc06",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: null,
        },
        createdOn: 1652960454182,
      },
      "e-78": {
        id: "e-78",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "POP_EFFECT",
          instant: false,
          config: { actionListId: "pop", autoStopEventId: "e-79" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "96b9645c-eb83-f0b5-e7d1-7cad39e9bf22",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "96b9645c-eb83-f0b5-e7d1-7cad39e9bf22",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: null,
        },
        createdOn: 1652960480388,
      },
      "e-80": {
        id: "e-80",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "POP_EFFECT",
          instant: false,
          config: { actionListId: "pop", autoStopEventId: "e-81" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "5473b639-ab5e-df51-b09a-d8022ed66120",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "5473b639-ab5e-df51-b09a-d8022ed66120",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: null,
        },
        createdOn: 1652960486659,
      },
      "e-82": {
        id: "e-82",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "POP_EFFECT",
          instant: false,
          config: { actionListId: "pop", autoStopEventId: "e-83" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "e4340ead-576d-d6de-5312-261ce3553e17",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "e4340ead-576d-d6de-5312-261ce3553e17",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: null,
        },
        createdOn: 1652960494169,
      },
      "e-84": {
        id: "e-84",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "POP_EFFECT",
          instant: false,
          config: { actionListId: "pop", autoStopEventId: "e-85" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "da1df270-5eee-4211-7972-4a9928d7e49a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "da1df270-5eee-4211-7972-4a9928d7e49a",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: null,
        },
        createdOn: 1652960501484,
      },
      "e-86": {
        id: "e-86",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "POP_EFFECT",
          instant: false,
          config: { actionListId: "pop", autoStopEventId: "e-87" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "c438f15d-a61f-bc55-8e7c-637c41e2b9ca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "c438f15d-a61f-bc55-8e7c-637c41e2b9ca",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: null,
        },
        createdOn: 1652960508858,
      },
      "e-88": {
        id: "e-88",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "POP_EFFECT",
          instant: false,
          config: { actionListId: "pop", autoStopEventId: "e-89" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "79623514-d724-842d-7181-eebb7a6c6144",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "79623514-d724-842d-7181-eebb7a6c6144",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: null,
        },
        createdOn: 1652960514063,
      },
      "e-90": {
        id: "e-90",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "POP_EFFECT",
          instant: false,
          config: { actionListId: "pop", autoStopEventId: "e-167" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "361f54a6-cf82-b868-c814-77fe73138c14",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "361f54a6-cf82-b868-c814-77fe73138c14",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: null,
        },
        createdOn: 1652960525647,
      },
      "e-92": {
        id: "e-92",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "POP_EFFECT",
          instant: false,
          config: { actionListId: "pop", autoStopEventId: "e-162" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "2cea7860-68b3-07fc-4464-9a6cefe0b731",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "2cea7860-68b3-07fc-4464-9a6cefe0b731",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: null,
        },
        createdOn: 1652960531864,
      },
      "e-103": {
        id: "e-103",
        name: "",
        animationType: "preset",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-3",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-164",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "628670e97a00da2ffe09574c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "628670e97a00da2ffe09574c",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1652977898162,
      },
      "e-109": {
        id: "e-109",
        name: "",
        animationType: "preset",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-5",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-108",
          },
        },
        mediaQueries: ["main"],
        target: {
          id: "628670e97a00da2ffe09574c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "628670e97a00da2ffe09574c",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: true,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1652977898162,
      },
      "e-111": {
        id: "e-111",
        name: "",
        animationType: "preset",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-3",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-110",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "628675a4fcf031643baebbae",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "628675a4fcf031643baebbae",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1652979109782,
      },
      "e-113": {
        id: "e-113",
        name: "",
        animationType: "preset",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-5",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-112",
          },
        },
        mediaQueries: ["main"],
        target: {
          id: "628675a4fcf031643baebbae",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "628675a4fcf031643baebbae",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: true,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1652979109782,
      },
      "e-130": {
        id: "e-130",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-6",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-131",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460bac8323695|a7bf5973-1a58-16e1-2c25-ccda9ae27a8d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460bac8323695|a7bf5973-1a58-16e1-2c25-ccda9ae27a8d",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1590166216437,
      },
      "e-132": {
        id: "e-132",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-6",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-133",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460bac8323695|07e53f8c-c88c-673f-0c5f-4bf46f58898f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460bac8323695|07e53f8c-c88c-673f-0c5f-4bf46f58898f",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1590166166269,
      },
      "e-134": {
        id: "e-134",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-6",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-135",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460bac8323695|93fe7bf8-6f76-8b7a-5cfe-b257fa452092",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460bac8323695|93fe7bf8-6f76-8b7a-5cfe-b257fa452092",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1590166255888,
      },
      "e-138": {
        id: "e-138",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-6",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-139",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460bac8323695|2aa15d73-b12a-a617-e54f-c6de5b9ec965",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460bac8323695|2aa15d73-b12a-a617-e54f-c6de5b9ec965",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1590166222598,
      },
      "e-140": {
        id: "e-140",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "POP_EFFECT",
          instant: false,
          config: { actionListId: "pop", autoStopEventId: "e-141" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460bac8323695|b9ae3e97-bfe5-8679-8a65-39f5acc4b4f9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460bac8323695|b9ae3e97-bfe5-8679-8a65-39f5acc4b4f9",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: null,
        },
        createdOn: 1653586973222,
      },
      "e-142": {
        id: "e-142",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-143",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: "._w-flip-card",
          originalId:
            "62824b29d52460f54232368c|390d8d27-bcf1-db01-58c6-4d8e02ec7fba",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: "._w-flip-card",
            originalId:
              "62824b29d52460f54232368c|390d8d27-bcf1-db01-58c6-4d8e02ec7fba",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1604560257199,
      },
      "e-143": {
        id: "e-143",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-142",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: "._w-flip-card",
          originalId:
            "62824b29d52460f54232368c|390d8d27-bcf1-db01-58c6-4d8e02ec7fba",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: "._w-flip-card",
            originalId:
              "62824b29d52460f54232368c|390d8d27-bcf1-db01-58c6-4d8e02ec7fba",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1604560257201,
      },
      "e-144": {
        id: "e-144",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-145",
          },
        },
        mediaQueries: ["medium", "small", "tiny"],
        target: {
          selector: "._w-flip-card",
          originalId:
            "62824b29d52460f54232368c|390d8d27-bcf1-db01-58c6-4d8e02ec7fba",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: "._w-flip-card",
            originalId:
              "62824b29d52460f54232368c|390d8d27-bcf1-db01-58c6-4d8e02ec7fba",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1604570002484,
      },
      "e-145": {
        id: "e-145",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-144",
          },
        },
        mediaQueries: ["medium", "small", "tiny"],
        target: {
          selector: "._w-flip-card",
          originalId:
            "62824b29d52460f54232368c|390d8d27-bcf1-db01-58c6-4d8e02ec7fba",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: "._w-flip-card",
            originalId:
              "62824b29d52460f54232368c|390d8d27-bcf1-db01-58c6-4d8e02ec7fba",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1604570002486,
      },
      "e-146": {
        id: "e-146",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-14",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-147",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".card-btn-link",
          originalId:
            "62824b29d52460f54232368c|390d8d27-bcf1-db01-58c6-4d8e02ec7fdb",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".card-btn-link",
            originalId:
              "62824b29d52460f54232368c|390d8d27-bcf1-db01-58c6-4d8e02ec7fdb",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1604559189558,
      },
      "e-147": {
        id: "e-147",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-15",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-146",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".card-btn-link",
          originalId:
            "62824b29d52460f54232368c|390d8d27-bcf1-db01-58c6-4d8e02ec7fdb",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".card-btn-link",
            originalId:
              "62824b29d52460f54232368c|390d8d27-bcf1-db01-58c6-4d8e02ec7fdb",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1604559189559,
      },
      "e-148": {
        id: "e-148",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-16",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-149",
          },
        },
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1610095150043,
      },
      "e-149": {
        id: "e-149",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-17",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-148",
          },
        },
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1610095150043,
      },
      "e-150": {
        id: "e-150",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-18",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-151",
          },
        },
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1610095474490,
      },
      "e-151": {
        id: "e-151",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-19",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-150",
          },
        },
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1610095474490,
      },
      "e-152": {
        id: "e-152",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-26",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-165",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c866068f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c866068f",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1602945521839,
      },
      "e-153": {
        id: "e-153",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-161",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c866067c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c866067c",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1601273774498,
      },
      "e-154": {
        id: "e-154",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-163",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c8660674",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c8660674",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1601273940561,
      },
      "e-156": {
        id: "e-156",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-27",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-160",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c8660684",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c8660684",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1601120080445,
      },
      "e-157": {
        id: "e-157",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-155",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c866068f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c866068f",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1602944944584,
      },
      "e-158": {
        id: "e-158",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-162",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c866066f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c866066f",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1601266917084,
      },
      "e-160": {
        id: "e-160",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-156",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c8660684",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c8660684",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1601120080446,
      },
      "e-161": {
        id: "e-161",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-153",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c866067c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c866067c",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1601273774498,
      },
      "e-163": {
        id: "e-163",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-154",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c8660674",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c8660674",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1601273940562,
      },
      "e-165": {
        id: "e-165",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-25",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-152",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c866068f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c866068f",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1602945521840,
      },
      "e-166": {
        id: "e-166",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-24",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-159",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c8660691",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c8660691",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1602945385345,
      },
      "e-167": {
        id: "e-167",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-28",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-164",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c866067d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460f54232368c|8f5520e0-522e-5e6b-a5e3-43e0c866067d",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1601273774498,
      },
      "e-168": {
        id: "e-168",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-27",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-169",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460f54232368c|dad8ff51-0fa3-3aff-efcd-fb17ac3fd77a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460f54232368c|dad8ff51-0fa3-3aff-efcd-fb17ac3fd77a",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1659976372102,
      },
      "e-169": {
        id: "e-169",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-168",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460f54232368c|dad8ff51-0fa3-3aff-efcd-fb17ac3fd77a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460f54232368c|dad8ff51-0fa3-3aff-efcd-fb17ac3fd77a",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1659976372102,
      },
      "e-170": {
        id: "e-170",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-31", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".c-card",
          originalId:
            "62824b29d52460f54232368c|0e503a92-c477-25c4-b859-d70b3e6d8a4f",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".c-card",
            originalId:
              "62824b29d52460f54232368c|0e503a92-c477-25c4-b859-d70b3e6d8a4f",
            appliesTo: "CLASS",
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-31-p",
            smoothing: 90,
            startsEntering: true,
            addStartOffset: false,
            addOffsetValue: 50,
            startsExiting: false,
            addEndOffset: false,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1603881512796,
      },
      "e-171": {
        id: "e-171",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-32", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".c-card",
          originalId:
            "62824b29d52460f54232368c|b3b4e86e-c954-2336-8b47-fcefcbf7fd6a",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".c-card",
            originalId:
              "62824b29d52460f54232368c|b3b4e86e-c954-2336-8b47-fcefcbf7fd6a",
            appliesTo: "CLASS",
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-32-p",
            smoothing: 90,
            startsEntering: true,
            addStartOffset: false,
            addOffsetValue: 50,
            startsExiting: false,
            addEndOffset: false,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1603881512796,
      },
      "e-172": {
        id: "e-172",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-33",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-173",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".step-block",
          originalId:
            "62824b29d52460f54232368c|6402f0b9-0835-8073-ae87-29480f603818",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".step-block",
            originalId:
              "62824b29d52460f54232368c|6402f0b9-0835-8073-ae87-29480f603818",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 50,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1611337298036,
      },
      "e-174": {
        id: "e-174",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-34",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-175",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".step-block",
          originalId:
            "62824b29d52460f54232368c|6402f0b9-0835-8073-ae87-29480f60383b",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".step-block",
            originalId:
              "62824b29d52460f54232368c|6402f0b9-0835-8073-ae87-29480f60383b",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 50,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1611755066275,
      },
      "e-176": {
        id: "e-176",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-177",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62824b29d52460f54232368c|3e64e237-ded3-fccf-3b46-886fcb485197",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62824b29d52460f54232368c|3e64e237-ded3-fccf-3b46-886fcb485197",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1661698439519,
      },
    },
    actionLists: {
      "a-3": {
        id: "a-3",
        title: "Home Page Loading",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-3-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-intro",
                    selectorGuids: ["78ed2fa4-04c8-83b7-6207-eba268e0659d"],
                  },
                  xValue: 0.5,
                  yValue: 0.5,
                  locked: true,
                },
              },
              {
                id: "a-3-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-intro",
                    selectorGuids: ["78ed2fa4-04c8-83b7-6207-eba268e0659d"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-3-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".scroll-mouse-link",
                    selectorGuids: ["fcac2de5-8bf0-260d-17c9-6a5be5cc723e"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-3-n-6",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".scroll-mouse-link",
                    selectorGuids: ["fcac2de5-8bf0-260d-17c9-6a5be5cc723e"],
                  },
                  xValue: 0.5,
                  yValue: 0.5,
                  locked: true,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-3-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 900,
                  easing: "ease",
                  duration: 600,
                  target: {
                    selector: ".hero-intro",
                    selectorGuids: ["78ed2fa4-04c8-83b7-6207-eba268e0659d"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: true,
                },
              },
              {
                id: "a-3-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 900,
                  easing: "ease",
                  duration: 600,
                  target: {
                    selector: ".hero-intro",
                    selectorGuids: ["78ed2fa4-04c8-83b7-6207-eba268e0659d"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-3-n-7",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 600,
                  target: {
                    selector: ".scroll-mouse-link",
                    selectorGuids: ["fcac2de5-8bf0-260d-17c9-6a5be5cc723e"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-3-n-8",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 600,
                  target: {
                    selector: ".scroll-mouse-link",
                    selectorGuids: ["fcac2de5-8bf0-260d-17c9-6a5be5cc723e"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: true,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: true,
        createdOn: 1538634602698,
      },
      "a-5": {
        id: "a-5",
        title: "Mouse Scroll",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-5-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 600,
                  target: {
                    selector: ".mouse-wheel-icon",
                    selectorGuids: ["fcac2de5-8bf0-260d-17c9-6a5be5cc7240"],
                  },
                  yValue: 12,
                  xUnit: "PX",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-5-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 600,
                  target: {
                    selector: ".mouse-wheel-icon",
                    selectorGuids: ["fcac2de5-8bf0-260d-17c9-6a5be5cc7240"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-5-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 0,
                  target: {
                    selector: ".mouse-wheel-icon",
                    selectorGuids: ["fcac2de5-8bf0-260d-17c9-6a5be5cc7240"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-5-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 600,
                  target: {
                    selector: ".mouse-wheel-icon",
                    selectorGuids: ["fcac2de5-8bf0-260d-17c9-6a5be5cc7240"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: false,
        createdOn: 1540635719783,
      },
      "a-6": {
        id: "a-6",
        title: "Habilitar boton enviar",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-6-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 1000,
                  target: {},
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-6-n-2",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {},
                  value: "none",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: false,
        createdOn: 1590166169498,
      },
      "a-12": {
        id: "a-12",
        title: "Card Flip IN",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-12-n",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "easeIn",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-card-front",
                    selectorGuids: ["dcc48192-42af-0af4-f034-8b051d2e32b3"],
                  },
                  yValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
              {
                id: "a-12-n-2",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-card-front",
                    selectorGuids: ["dcc48192-42af-0af4-f034-8b051d2e32b3"],
                  },
                  value: "flex",
                },
              },
              {
                id: "a-12-n-3",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-card-back",
                    selectorGuids: ["dcc48192-42af-0af4-f034-8b051d2e32c8"],
                  },
                  value: "none",
                },
              },
              {
                id: "a-12-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-card-back",
                    selectorGuids: ["dcc48192-42af-0af4-f034-8b051d2e32c8"],
                  },
                  yValue: -90,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-12-n-5",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "easeIn",
                  duration: 250,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-card-front",
                    selectorGuids: ["dcc48192-42af-0af4-f034-8b051d2e32b3"],
                  },
                  yValue: 90,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-12-n-6",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-card-front",
                    selectorGuids: ["dcc48192-42af-0af4-f034-8b051d2e32b3"],
                  },
                  value: "none",
                },
              },
              {
                id: "a-12-n-7",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-card-back",
                    selectorGuids: ["dcc48192-42af-0af4-f034-8b051d2e32c8"],
                  },
                  value: "flex",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-12-n-8",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "easeOut",
                  duration: 250,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-card-back",
                    selectorGuids: ["dcc48192-42af-0af4-f034-8b051d2e32c8"],
                  },
                  yValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: true,
        createdOn: 1604560284744,
      },
      "a-13": {
        id: "a-13",
        title: "Card Flip OUT",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-13-n",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "easeIn",
                  duration: 250,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-card-back",
                    selectorGuids: ["dcc48192-42af-0af4-f034-8b051d2e32c8"],
                  },
                  yValue: -90,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-13-n-2",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-card-front",
                    selectorGuids: ["dcc48192-42af-0af4-f034-8b051d2e32b3"],
                  },
                  value: "flex",
                },
              },
              {
                id: "a-13-n-3",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-card-back",
                    selectorGuids: ["dcc48192-42af-0af4-f034-8b051d2e32c8"],
                  },
                  value: "none",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-13-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "easeOut",
                  duration: 250,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-card-front",
                    selectorGuids: ["dcc48192-42af-0af4-f034-8b051d2e32b3"],
                  },
                  yValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: false,
        createdOn: 1604560284744,
      },
      "a-14": {
        id: "a-14",
        title: "Card Btn IN",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-14-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-card-btn-text.default",
                    selectorGuids: [
                      "dcc48192-42af-0af4-f034-8b051d2e32c7",
                      "dcc48192-42af-0af4-f034-8b051d2e32d0",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-14-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".card-text.focus",
                    selectorGuids: [
                      "dcc48192-42af-0af4-f034-8b051d2e32b7",
                      "dcc48192-42af-0af4-f034-8b051d2e32ce",
                    ],
                  },
                  yValue: 100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-14-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-card-btn-text.focus",
                    selectorGuids: [
                      "dcc48192-42af-0af4-f034-8b051d2e32c7",
                      "dcc48192-42af-0af4-f034-8b051d2e32d1",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-14-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".card-btn-focus-bg",
                    selectorGuids: ["dcc48192-42af-0af4-f034-8b051d2e32b9"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-14-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-card-btn-text.default",
                    selectorGuids: [
                      "dcc48192-42af-0af4-f034-8b051d2e32c7",
                      "dcc48192-42af-0af4-f034-8b051d2e32d0",
                    ],
                  },
                  yValue: -100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-14-n-6",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-card-btn-text.focus",
                    selectorGuids: [
                      "dcc48192-42af-0af4-f034-8b051d2e32c7",
                      "dcc48192-42af-0af4-f034-8b051d2e32d1",
                    ],
                  },
                  yValue: -100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-14-n-7",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 150,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".card-text.focus",
                    selectorGuids: [
                      "dcc48192-42af-0af4-f034-8b051d2e32b7",
                      "dcc48192-42af-0af4-f034-8b051d2e32ce",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-14-n-8",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 300,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".card-btn-focus-bg",
                    selectorGuids: ["dcc48192-42af-0af4-f034-8b051d2e32b9"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: true,
        createdOn: 1604559193383,
      },
      "a-15": {
        id: "a-15",
        title: "Card Btn OUT",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-15-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-card-btn-text.default",
                    selectorGuids: [
                      "dcc48192-42af-0af4-f034-8b051d2e32c7",
                      "dcc48192-42af-0af4-f034-8b051d2e32d0",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-15-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-card-btn-text.focus",
                    selectorGuids: [
                      "dcc48192-42af-0af4-f034-8b051d2e32c7",
                      "dcc48192-42af-0af4-f034-8b051d2e32d1",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-15-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".card-btn-focus-bg",
                    selectorGuids: ["dcc48192-42af-0af4-f034-8b051d2e32b9"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-15-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".card-text.focus",
                    selectorGuids: [
                      "dcc48192-42af-0af4-f034-8b051d2e32b7",
                      "dcc48192-42af-0af4-f034-8b051d2e32ce",
                    ],
                  },
                  yValue: 100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: false,
        createdOn: 1604559193383,
      },
      "a-16": {
        id: "a-16",
        title: "SHOW Faq Item",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-16-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-faq-a",
                    selectorGuids: ["7e43cd2a-b260-286c-e7a8-1a9b4eef6056"],
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "px",
                  locked: false,
                },
              },
              {
                id: "a-16-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-a-text",
                    selectorGuids: ["7e43cd2a-b260-286c-e7a8-1a9b4eef605a"],
                  },
                  yValue: 50,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-16-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-a-text",
                    selectorGuids: ["7e43cd2a-b260-286c-e7a8-1a9b4eef605a"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-16-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: "._w-faq-icon",
                    selectorGuids: ["7e43cd2a-b260-286c-e7a8-1a9b4eef6059"],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
              {
                id: "a-16-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-stripe-1",
                    selectorGuids: ["7e43cd2a-b260-286c-e7a8-1a9b4eef6052"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-16-n-6",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-faq-a",
                    selectorGuids: ["7e43cd2a-b260-286c-e7a8-1a9b4eef6056"],
                  },
                  widthUnit: "PX",
                  heightUnit: "AUTO",
                  locked: false,
                },
              },
              {
                id: "a-16-n-7",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-a-text",
                    selectorGuids: ["7e43cd2a-b260-286c-e7a8-1a9b4eef605a"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-16-n-8",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-a-text",
                    selectorGuids: ["7e43cd2a-b260-286c-e7a8-1a9b4eef605a"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-16-n-9",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: "._w-faq-icon",
                    selectorGuids: ["7e43cd2a-b260-286c-e7a8-1a9b4eef6059"],
                  },
                  zValue: 180,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
              {
                id: "a-16-n-10",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-stripe-1",
                    selectorGuids: ["7e43cd2a-b260-286c-e7a8-1a9b4eef6052"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: true,
        createdOn: 1610095163825,
      },
      "a-17": {
        id: "a-17",
        title: "HIDE Faq Item",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-17-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-faq-a",
                    selectorGuids: ["7e43cd2a-b260-286c-e7a8-1a9b4eef6056"],
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "px",
                  locked: false,
                },
              },
              {
                id: "a-17-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-a-text",
                    selectorGuids: ["7e43cd2a-b260-286c-e7a8-1a9b4eef605a"],
                  },
                  yValue: 50,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-17-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-a-text",
                    selectorGuids: ["7e43cd2a-b260-286c-e7a8-1a9b4eef605a"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-17-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: "._w-faq-icon",
                    selectorGuids: ["7e43cd2a-b260-286c-e7a8-1a9b4eef6059"],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
              {
                id: "a-17-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-stripe-1",
                    selectorGuids: ["7e43cd2a-b260-286c-e7a8-1a9b4eef6052"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: false,
        createdOn: 1610095163825,
      },
      "a-18": {
        id: "a-18",
        title: "Hover IN Faq",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-18-n",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 350,
                  target: {
                    useEventTarget: true,
                    id: "62824b29d52460f54232368c|927b256a-6c99-d50e-d840-096e0995893f",
                  },
                  globalSwatchId: "",
                  rValue: 34,
                  bValue: 34,
                  gValue: 34,
                  aValue: 1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-18-n-2",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 250,
                  target: {
                    useEventTarget: true,
                    id: "62824b29d52460f54232368c|927b256a-6c99-d50e-d840-096e0995893f",
                  },
                  globalSwatchId: "",
                  rValue: 51,
                  bValue: 51,
                  gValue: 51,
                  aValue: 1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: true,
        createdOn: 1610095492782,
      },
      "a-19": {
        id: "a-19",
        title: "Hover OUT Faq",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-19-n",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 250,
                  target: {
                    useEventTarget: true,
                    id: "62824b29d52460f54232368c|927b256a-6c99-d50e-d840-096e0995893f",
                  },
                  globalSwatchId: "",
                  rValue: 34,
                  bValue: 34,
                  gValue: 34,
                  aValue: 1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: false,
        createdOn: 1610095492782,
      },
      "a-26": {
        id: "a-26",
        title: "Close SideNav IN",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-26-n",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".help-icon",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98315"],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-26-n-2",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".help-icon",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98315"],
                  },
                  zValue: 90,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: true,
        createdOn: 1602945526622,
      },
      "a-30": {
        id: "a-30",
        title: "Info Btn Hover OUT",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-30-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-help-text",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa9831a"],
                  },
                  widthValue: 0,
                  widthUnit: "PX",
                  heightUnit: "PX",
                  locked: false,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: false,
        createdOn: 1601120083548,
      },
      "a-23": {
        id: "a-23",
        title: "Info Btn Hover IN",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-23-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-help-text",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa9831a"],
                  },
                  widthValue: 0,
                  widthUnit: "PX",
                  heightUnit: "PX",
                  locked: false,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-23-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-help-text",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa9831a"],
                  },
                  widthValue: 0,
                  widthUnit: "AUTO",
                  heightUnit: "PX",
                  locked: false,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: true,
        createdOn: 1601120083548,
      },
      "a-27": {
        id: "a-27",
        title: "Help Btn Hover IN",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-27-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-help-text",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa9831a"],
                  },
                  widthValue: 0,
                  widthUnit: "PX",
                  heightUnit: "PX",
                  locked: false,
                },
              },
              {
                id: "a-27-n-2",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".help-icon",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98315"],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-27-n-3",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-help-text",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa9831a"],
                  },
                  widthValue: 0,
                  widthUnit: "AUTO",
                  heightUnit: "PX",
                  locked: false,
                },
              },
              {
                id: "a-27-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".help-icon",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98315"],
                  },
                  zValue: -135,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: true,
        createdOn: 1601120083548,
      },
      "a-29": {
        id: "a-29",
        title: "Close UI",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-29-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-faq-btn.faq",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa98316",
                      "134b8772-dc62-752b-41e0-b8a29aa98333",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-help-btn",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98320"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-29-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-help-btn",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98320"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-faq-btn.faq",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa98316",
                      "134b8772-dc62-752b-41e0-b8a29aa98333",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-29-n-5",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".c-faq-btn.faq",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa98316",
                      "134b8772-dc62-752b-41e0-b8a29aa98333",
                    ],
                  },
                  value: "block",
                },
              },
              {
                id: "a-29-n-6",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".c-help-btn",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98320"],
                  },
                  value: "block",
                },
              },
              {
                id: "a-29-n-7",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {},
                  value: "none",
                },
              },
              {
                id: "a-29-n-8",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".b-help-btn.open-menu",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa9831b",
                      "134b8772-dc62-752b-41e0-b8a29aa98330",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-9",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".b-help-btn.open-menu",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa9831b",
                      "134b8772-dc62-752b-41e0-b8a29aa98330",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-29-n-10",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-faq-btn.faq",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa98316",
                      "134b8772-dc62-752b-41e0-b8a29aa98333",
                    ],
                  },
                  yValue: 50,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-11",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-faq-btn.faq",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa98316",
                      "134b8772-dc62-752b-41e0-b8a29aa98333",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-29-n-12",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-help-btn",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98320"],
                  },
                  yValue: 50,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-13",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-help-btn",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98320"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-29-n-14",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".b-help-btn.close-menu",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa9831b",
                      "134b8772-dc62-752b-41e0-b8a29aa98331",
                    ],
                  },
                  yValue: -150,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-15",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".b-help-btn.close-menu",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa9831b",
                      "134b8772-dc62-752b-41e0-b8a29aa98331",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-29-n-16",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {},
                  yValue: -100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-29-n-17",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {},
                  value: "none",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-29-n-18",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".c-faq-btn.faq",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa98316",
                      "134b8772-dc62-752b-41e0-b8a29aa98333",
                    ],
                  },
                  value: "none",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-29-n-19",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".c-help-btn",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98320"],
                  },
                  value: "none",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-29-n-20",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".b-help-btn.open-menu",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa9831b",
                      "134b8772-dc62-752b-41e0-b8a29aa98330",
                    ],
                  },
                  value: "flex",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-29-n-21",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".b-help-btn.open-menu",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa9831b",
                      "134b8772-dc62-752b-41e0-b8a29aa98330",
                    ],
                  },
                  yValue: -100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-22",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".b-help-btn.open-menu",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa9831b",
                      "134b8772-dc62-752b-41e0-b8a29aa98330",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: true,
        createdOn: 1602944948156,
      },
      "a-22": {
        id: "a-22",
        title: "Howto HIDE",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-22-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-faq-2",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98324"],
                  },
                  xValue: 100,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-22-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-faq-2",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98324"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-22-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-howto-close",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa9832b"],
                  },
                  xValue: 100,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-22-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".c-howto-close",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa9832b"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-22-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".howto-close-icon",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa9832c"],
                  },
                  xValue: 100,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-22-n-6",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".c-faq-2",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98324"],
                  },
                  value: "none",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: false,
        createdOn: 1601266601335,
      },
      "a-21": {
        id: "a-21",
        title: "Help Btn Hover OUT",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-21-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".c-help-text",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa9831a"],
                  },
                  widthValue: 0,
                  widthUnit: "PX",
                  heightUnit: "PX",
                  locked: false,
                },
              },
              {
                id: "a-21-n-2",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".help-icon",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98315"],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: false,
        createdOn: 1601120083548,
      },
      "a-25": {
        id: "a-25",
        title: "Close SideNav OUT",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-25-n",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".help-icon",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98315"],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: false,
        createdOn: 1602945526622,
      },
      "a-24": {
        id: "a-24",
        title: "Open UI",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-24-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".b-help-btn.open-menu",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa9831b",
                      "134b8772-dc62-752b-41e0-b8a29aa98330",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-24-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".b-help-btn.open-menu",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa9831b",
                      "134b8772-dc62-752b-41e0-b8a29aa98330",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-24-n-3",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".b-help-btn.open-menu",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa9831b",
                      "134b8772-dc62-752b-41e0-b8a29aa98330",
                    ],
                  },
                  value: "none",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-24-n-4",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".c-faq-btn.faq",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa98316",
                      "134b8772-dc62-752b-41e0-b8a29aa98333",
                    ],
                  },
                  value: "block",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-24-n-5",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".c-help-btn",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98320"],
                  },
                  value: "block",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-24-n-6",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {},
                  value: "block",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-24-n-7",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-faq-btn.faq",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa98316",
                      "134b8772-dc62-752b-41e0-b8a29aa98333",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-24-n-8",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-faq-btn.faq",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa98316",
                      "134b8772-dc62-752b-41e0-b8a29aa98333",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-24-n-9",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-help-btn",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98320"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-24-n-10",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-help-btn",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98320"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-24-n-11",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".b-help-btn.close-menu",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa9831b",
                      "134b8772-dc62-752b-41e0-b8a29aa98331",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-24-n-12",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".b-help-btn.close-menu",
                    selectorGuids: [
                      "134b8772-dc62-752b-41e0-b8a29aa9831b",
                      "134b8772-dc62-752b-41e0-b8a29aa98331",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-24-n-13",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {},
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: false,
        createdOn: 1602944948156,
      },
      "a-28": {
        id: "a-28",
        title: "Howto SHOW",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-28-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-faq-2",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98324"],
                  },
                  xValue: 100,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-28-n-2",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".c-faq-2",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98324"],
                  },
                  value: "none",
                },
              },
              {
                id: "a-28-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-faq-2",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98324"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-28-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-howto-close",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa9832b"],
                  },
                  xValue: 100,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-28-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".howto-close-icon",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa9832c"],
                  },
                  xValue: 100,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-28-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".c-howto-close",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa9832b"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-28-n-7",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".c-faq-2",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98324"],
                  },
                  value: "flex",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-28-n-8",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-faq-2",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98324"],
                  },
                  xValue: 0,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-28-n-9",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-faq-2",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa98324"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-28-n-10",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 300,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".c-howto-close",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa9832b"],
                  },
                  xValue: 0,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-28-n-11",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 300,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".c-howto-close",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa9832b"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-28-n-12",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 450,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".howto-close-icon",
                    selectorGuids: ["134b8772-dc62-752b-41e0-b8a29aa9832c"],
                  },
                  xValue: 0,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: true,
        createdOn: 1601266601335,
      },
      "a-31": {
        id: "a-31",
        title: "Cards",
        continuousParameterGroups: [
          {
            id: "a-31-p",
            type: "SCROLL_PROGRESS",
            parameterLabel: "Scroll",
            continuousActionGroups: [
              {
                keyframe: 40,
                actionItems: [
                  {
                    id: "a-31-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: true,
                        id: "62824b29d52460f54232368c|0e503a92-c477-25c4-b859-d70b3e6d8a4f",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: true,
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-31-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: true,
                        id: "62824b29d52460f54232368c|0e503a92-c477-25c4-b859-d70b3e6d8a4f",
                      },
                      xValue: 0.8,
                      yValue: 0.8,
                      locked: true,
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1603881517811,
      },
      "a-32": {
        id: "a-32",
        title: "Cards 2",
        continuousParameterGroups: [
          {
            id: "a-32-p",
            type: "SCROLL_PROGRESS",
            parameterLabel: "Scroll",
            continuousActionGroups: [
              {
                keyframe: 40,
                actionItems: [
                  {
                    id: "a-32-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: true,
                        id: "62824b29d52460f54232368c|b3b4e86e-c954-2336-8b47-fcefcbf7fd6a",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: true,
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-32-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: true,
                        id: "62824b29d52460f54232368c|b3b4e86e-c954-2336-8b47-fcefcbf7fd6a",
                      },
                      xValue: 0.8,
                      yValue: 0.8,
                      locked: true,
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1603881517811,
      },
      "a-33": {
        id: "a-33",
        title: "Scroll-Content",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-33-n",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".bg-shadow",
                    selectorGuids: ["7e9f06e4-9f5e-a217-bdfe-00aef50c4c1f"],
                  },
                  value: "none",
                },
              },
              {
                id: "a-33-n-2",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".dot-2",
                    selectorGuids: ["7e9f06e4-9f5e-a217-bdfe-00aef50c4c13"],
                  },
                  globalSwatchId: "1730333e",
                  rValue: 238,
                  bValue: 244,
                  gValue: 239,
                  aValue: 1,
                },
              },
              {
                id: "a-33-n-3",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".dot-2",
                    selectorGuids: ["7e9f06e4-9f5e-a217-bdfe-00aef50c4c13"],
                  },
                  widthValue: 12,
                  heightValue: 12,
                  widthUnit: "px",
                  heightUnit: "px",
                  locked: false,
                },
              },
              {
                id: "a-33-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".img-block",
                    selectorGuids: ["7e9f06e4-9f5e-a217-bdfe-00aef50c4c16"],
                  },
                  value: 0.4,
                  unit: "",
                },
              },
              {
                id: "a-33-n-5",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".content",
                    selectorGuids: ["7e9f06e4-9f5e-a217-bdfe-00aef50c4c18"],
                  },
                  globalSwatchId: "1f0d510e",
                  rValue: 71,
                  bValue: 87,
                  gValue: 74,
                  aValue: 1,
                },
              },
              {
                id: "a-33-n-6",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {},
                  globalSwatchId: "",
                  rValue: 173,
                  bValue: 194,
                  gValue: 180,
                  aValue: 1,
                },
              },
              {
                id: "a-33-n-7",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".label-2",
                    selectorGuids: ["7e9f06e4-9f5e-a217-bdfe-00aef50c4c15"],
                  },
                  globalSwatchId: "1f0d510e",
                  rValue: 71,
                  bValue: 87,
                  gValue: 74,
                  aValue: 1,
                },
              },
              {
                id: "a-33-n-8",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".step",
                    selectorGuids: ["7e9f06e4-9f5e-a217-bdfe-00aef50c4c1b"],
                  },
                  globalSwatchId: "1730333e",
                  rValue: 238,
                  bValue: 244,
                  gValue: 239,
                  aValue: 1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-33-n-9",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 600,
                  easing: "",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".content",
                    selectorGuids: ["7e9f06e4-9f5e-a217-bdfe-00aef50c4c18"],
                  },
                  globalSwatchId: "0b375fce",
                  rValue: 18,
                  bValue: 18,
                  gValue: 18,
                  aValue: 1,
                },
              },
              {
                id: "a-33-n-10",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 600,
                  easing: "",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".dot-2",
                    selectorGuids: ["7e9f06e4-9f5e-a217-bdfe-00aef50c4c13"],
                  },
                  globalSwatchId: "6126b98f",
                  rValue: 0,
                  bValue: 208,
                  gValue: 108,
                  aValue: 1,
                },
              },
              {
                id: "a-33-n-11",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 600,
                  easing: "",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".dot-2",
                    selectorGuids: ["7e9f06e4-9f5e-a217-bdfe-00aef50c4c13"],
                  },
                  widthValue: 24,
                  heightValue: 24,
                  widthUnit: "px",
                  heightUnit: "px",
                  locked: false,
                },
              },
              {
                id: "a-33-n-12",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 600,
                  easing: "",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".img-block",
                    selectorGuids: ["7e9f06e4-9f5e-a217-bdfe-00aef50c4c16"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-33-n-13",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 600,
                  easing: "",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".step",
                    selectorGuids: ["7e9f06e4-9f5e-a217-bdfe-00aef50c4c1b"],
                  },
                  globalSwatchId: "50035ee0",
                  rValue: 255,
                  bValue: 255,
                  gValue: 255,
                  aValue: 1,
                },
              },
              {
                id: "a-33-n-14",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 600,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".bg-shadow",
                    selectorGuids: ["7e9f06e4-9f5e-a217-bdfe-00aef50c4c1f"],
                  },
                  value: "block",
                },
              },
              {
                id: "a-33-n-15",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 600,
                  easing: "",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".label-2",
                    selectorGuids: ["7e9f06e4-9f5e-a217-bdfe-00aef50c4c15"],
                  },
                  globalSwatchId: "6126b98f",
                  rValue: 0,
                  bValue: 208,
                  gValue: 108,
                  aValue: 1,
                },
              },
              {
                id: "a-33-n-16",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 600,
                  easing: "",
                  duration: 200,
                  target: {},
                  globalSwatchId: "e5674d92",
                  rValue: 112,
                  bValue: 138,
                  gValue: 118,
                  aValue: 1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: true,
        createdOn: 1611336400626,
      },
      "a-34": {
        id: "a-34",
        title: "Scroll Line",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-34-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".scroll-animate",
                    selectorGuids: ["7e9f06e4-9f5e-a217-bdfe-00aef50c4c1c"],
                  },
                  xValue: 1,
                  yValue: 0,
                  locked: false,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-34-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".scroll-animate",
                    selectorGuids: ["7e9f06e4-9f5e-a217-bdfe-00aef50c4c1c"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: false,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: true,
        createdOn: 1611752162523,
      },
      growIn: {
        id: "growIn",
        useFirstGroupAsInitialState: true,
        actionItemGroups: [
          {
            actionItems: [
              {
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  duration: 0,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: true,
                  },
                  value: 0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  duration: 0,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: true,
                  },
                  xValue: 0.7500000000000001,
                  yValue: 0.7500000000000001,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1000,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: true,
                  },
                  xValue: 1,
                  yValue: 1,
                },
              },
              {
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1000,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: true,
                  },
                  value: 1,
                },
              },
            ],
          },
        ],
      },
      pop: {
        id: "pop",
        actionItemGroups: [
          {
            actionItems: [
              {
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 250,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: true,
                  },
                  xValue: 0.7500000000000001,
                  yValue: 0.7500000000000001,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outElastic",
                  duration: 1000,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: true,
                  },
                  xValue: 1,
                  yValue: 1,
                },
              },
            ],
          },
        ],
      },
    },
    site: {
      mediaQueries: [
        { key: "main", min: 992, max: 10000 },
        { key: "medium", min: 768, max: 991 },
        { key: "small", min: 480, max: 767 },
        { key: "tiny", min: 0, max: 479 },
      ],
    },
  });
  