export const ConstCss = {
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
    flexCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    textNormal: {
        fontSize: 14,
        color: '#212121'
    }
};

export const Color = {
    white: '#ffffff',
    black: '#000000',
    primary: '#0358A7',
    grayBackground: '#F7F7F7',
    grayHeaderBack: '#F2F2F2',
    backText: '#212121',
    blue: '#0358A7',
    blueBackground: '#0358A7',
    yellow: '#FFC700',
    gray: '#828282',
    graySecond: '#6A6D70',
    grayText: '#605E5C',
    blackSecond: '#32363A',
    red: '#ff0000',
    grayNoData: '#BABABA',
    greyTableText: '#201F1E',
    warn: '#E9730C',
    tagPrimary: '#CAE4F3',
    tagSecondary: '#E9E9E9',
    grayButton: '#CCCCCC',
    blueLink: '#0854A0'
};

export const uploadFileFormat = [
    {
        filetype: ".txt",
        name: "text/plain"
    }, {
        filetype: ".pdf",
        name: "application/pdf"
    },
    {
        filetype: ".docx",
        name: "application/vnd.ms-word"
    }, {
        filetype: ".xls",
        name: "application/vnd.ms-excel"
    }, {
        filetype: ".xlsx",
        name: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    },
    {
        filetype: ".png",
        name: "image/png"
    }, {
        filetype: ".jpg",
        name: "image/jpeg"
    }, {
        filetype: ".jpeg",
        name: "image/jpeg"
    }, {
        filetype: ".gif",
        name: "image/gif"
    }, {
        filetype: ".csv",
        name: "text/csv"
    }
];

export const constData = {
    rol_status: [
        {
            "key": "Y",
            "text": "Идэвхтэй"
        },
        {
            "key": "N",
            "text": "Идэвхгүй"
        },
    ],
    sidepartment_status: [
        {
            "key": "Active",
            "text": "Идэвхтэй"
        },
        {
            "key": "Inactive",
            "text": "Идэвхгүй"
        },
        {
            "key": "Liquidate",
            "text": "Татан буугдсан"
        }
    ],
    hrManagerPos_Type: [
        {
            "key": "D",
            "text": "Шууд удирдлага"
        },
        {
            "key": "N",
            "text": "Чиг үүргийн удирдлага"
        },
        {
            "key": "R",
            "text": "Тайлагнах удирдлага"
        },
        {
            "key": "L",
            "text": "Шугаман удирдлага"
        }
    ],
    Gender: [
        {
            "key": "M",
            "text": "Эр"
        },
        {
            "key": "F",
            "text": "Эм"
        }
    ],
    MaritalStatus: [
        {
            "key": "M",
            "text": "Гэрлэсэн"
        },
        {
            "key": "U",
            "text": "Гэрлээгүй"
        },
        {
            "key": "W",
            "text": "Бэлэвсэн"
        },
        {
            "key": "K",
            "text": "Тодорхойгүй"
        }
    ],
    hrEmployee_BloodGroup: [
        {
            "key": "0",
            "text": "-"
        },
        {
            "key": "1",
            "text": "1"
        },
        {
            "key": "2",
            "text": "2"
        },
        {
            "key": "3",
            "text": "3"
        },
        {
            "key": "4",
            "text": "4"
        }
    ],
    hrEmpRank_Type: [
        {
            "key": "G",
            "text": "Зэрэг"
        },
        {
            "key": "R",
            "text": "Цол"
        }
    ],
    hrEmpTraining_Type: [
        {
            "key": "S",
            "text": "Хувиараа"
        },
        {
            "key": "C",
            "text": "Байгууллагаас"
        },
        {
            "key": "A",
            "text": "Өөр байгууллагаас"
        }
    ],
    hrBenefitPackageDtl_FreqType: [
        {
            "key": "D",
            "text": "Өдөр"
        },
        {
            "key": "M",
            "text": "Сар"
        }
    ],
    Gov_shift_Type: [
        {
            "key": "SH",
            "text": "Албан байгууллага дотор шилжсэн"
        },
        {
            "key": "SJ",
            "text": "Албан тушаал дэвшүүлсэн"
        },
        {
            "key": "PS",
            "text": "Төрийн албаны ангилал, зэрэглэлд өөрчлөлт оруулсан"
        },
        {
            "key": "SL",
            "text": "Цалинд өөрчлөлт орсон"
        },
        {
            "key": "IT",
            "text": "Даатгуулагчийн төрөл өөрчлөгдсөн"
        },
        {
            "key": "LC",
            "text": "Хөдөлмөрийн нөхцөл өөрчлөгдсөн"
        }
    ],
    Gov_Terminate_Type: [
        {
            "key": "MV",
            "text": "Байгууллага хооронд шилжүүлэн томилсон"
        },
        {
            "key": "MR",
            "text": "Байгууллага хооронд сэлгэн шилжүүлсэн"
        },
        {
            "key": "IN",
            "text": "Ажлаас халсан"
        },
        {
            "key": "IE",
            "text": "Ажилтны санаачлагаар чөлөөлсөн"
        },
        {
            "key": "IL",
            "text": "Түр чөлөөлсөн"
        },
        {
            "key": "IC",
            "text": "Тэтгэвэрт гарсан"
        },
        {
            "key": "ID",
            "text": "Нас барсан"
        }
    ],
    hrContract_LabourCondition: [
        {
            "key": "N",
            "text": "Хэвийн"
        },
        {
            "key": "A",
            "text": "Хэвийн бус"
        },
        {
            "key": "H",
            "text": "Хүнд"
        },
        {
            "key": "P",
            "text": "Хортой"
        },
        {
            "key": "W",
            "text": "Халуун"
        }
    ],
    Gov_Employment_Type: [
        {
            "key": "OT",
            "text": "Өөр байгууллагад ажилласан түүх"
        },
        {
            "key": "HR",
            "text": "Ажилд авсан түүх"
        },
        {
            "key": "SH",
            "text": "Дотоод хөдөлгөөний түүх"
        },
        {
            "key": "TR",
            "text": "Ажлаас чөлөөлсөн түүх"
        }
    ],
    Gov_Employment_Type_Double_Emp: [
        {
            "key": "HR",
            "text": "Ажилд авсан түүх"
        },
        {
            "key": "SH",
            "text": "Дотоод хөдөлгөөний түүх"
        },
        {
            "key": "TR",
            "text": "Ажлаас чөлөөлсөн түүх"
        }
    ],
    hrEmployee_Status: [
        {
            "key": "ACTIVE",
            "text": "Ажиллаж байгаа",
            "description": "Давхар ажил эрхлэлт, Идэвхтэй, Түр эзгүй"
        },
        {
            "key": "INACTIVE",
            "text": "Ажиллахгүй байгаа",
            "description": "Бүртгэсэн, Түтгэлзсэн, Ажлаас гарсан, Шилжсэн",
            "divider": true
        },
        {
            "key": "RG",
            "text": "Бүртгэсэн"
        },
        {
            "key": "AC",
            "text": "Идэвхтэй"
        },
        {
            "key": "AC1",
            "text": "Давхар ажил эрхлэлт"
        },
        {
            "key": "LV",
            "text": "Түр эзгүй"
        },
        {
            "key": "MV",
            "text": "Шилжсэн"
        },
        {
            "key": "IN",
            "text": "Ажлаас гарсан"
        },
        {
            "key": "SP",
            "text": "Түдгэлзүүлсэн"
        }
    ],
    siDepartment_DepType: [
        {
            "key": "B",
            "text": "Салбар"
        }
    ],
    hrPosition_Type: [
        {
            "key": "B",
            "text": "Үндсэн"
        },
        {
            "key": "C",
            "text": "Гэрээт"
        }
    ],
    Role_Module_Access: [
        {
            "key": "Edit",
            "text": "Засах"
        },
        {
            "key": "View",
            "text": "Харах"
        },
        {
            "key": "NoAccess",
            "text": "Эрхгүй"
        }
    ],
    Role_Type: [
        {
            "key": "System",
            "text": "Системийн"
        },
        {
            "key": "Custom",
            "text": "Үүсгэсэн"
        }
    ],
    User_Status_Filter: [
        {
            "key": "All",
            "text": "Бүгд"
        }
    ],
    User_Status: [
        {
            "key": "A",
            "text": "Идэвхтэй"
        },
        {
            "key": "L",
            "text": "Түгжсэн"
        },
        {
            "key": "I",
            "text": "Идэвхгүй"
        },
        {
            "key": "D",
            "text": "Устгасан"
        }
    ],
    hrempinvalid_reason: [
        {
            "key": "trauma",
            "text": "Гэмтлээр"
        },
        {
            "key": "disease",
            "text": "Өвчнаар"
        },
        {
            "key": "congenital",
            "text": "Төрөлхийн"
        }
    ],
    hrempinvalid_duration: [
        {
            "key": "IA",
            "text": "3 сар"
        },
        {
            "key": "IB",
            "text": "6 сар"
        },
        {
            "key": "IC",
            "text": "12 сар"
        },
        {
            "key": "ID",
            "text": "18 сар"
        },
        {
            "key": "IE",
            "text": "24 сар"
        },
        {
            "key": "IF",
            "text": "Хугацаагүй"
        }
    ],
    hrempinvalid_desiction: [
        {
            "key": "Agreed",
            "text": "Тогтоосон"
        },
        {
            "key": "Extended",
            "text": "Сунгасан"
        },
        {
            "key": "Canceled",
            "text": "Цуцалсан"
        },
        {
            "key": "Refused",
            "text": "Татгалзсан"
        }
    ],
    hrExtra_CalcType: [
        {
            "key": "PT",
            "text": "Хувиар"
        },
        {
            "key": "AT",
            "text": "Дүнгээр"
        }
    ],
    hrExtra_CalcType_Symbol: [
        {
            "key": "PT",
            "text": "%"
        },
        {
            "key": "AT",
            "text": "₮"
        }
    ],
    hrExtra_CalcMethod: [
        {
            "key": "SA",
            "text": "Тодорхой дүнгээр"
        },
        {
            "key": "SR",
            "text": "Дээд доод хязгаараар"
        }
    ],
    hrExtra_Frequency: [
        {
            "key": "DY",
            "text": "Өдрөөр"
        },
        {
            "key": "MT",
            "text": "Сараар"
        },
        {
            "key": "SE",
            "text": "Улирлаар"
        }
    ],
    hrSalarySchema_Grade: [
        {
            "key": "ТТ",
            "text": "Төрийн тусгай"
        },
        {
            "key": "ТӨ",
            "text": "Төрийн өндөр"
        },
        {
            "key": "АА",
            "text": "Төрийн захиргаа /Ажлын алба/"
        },
        {
            "key": "ТЗ",
            "text": "Төрийн захиргаа"
        },
        {
            "key": "ТҮ",
            "text": "Төрийн үйлчилгээ /эрүүл мэндээс бусад/"
        },
        {
            "key": "ТҮБД",
            "text": "Төрийн үйлчилгээ /боловсрол/"
        },
        {
            "key": "ТҮМБ",
            "text": "Төрийн үйлчилгээ /мэргэжлийн байгууллага/"
        },
        {
            "key": "ТҮСУ",
            "text": "Төрийн үйлчилгээ /соёл урлаг/"
        },
        {
            "key": "ТҮШУ",
            "text": "Төрийн үйлчилгээ /шинжлэх ухаан/"
        },
        {
            "key": "ТҮЭМ",
            "text": "Төрийн үйлчилгээ /эрүүл мэнд/"
        },
        {
            "key": "ҮА",
            "text": "Төрийн тусгай /аудит/"
        }
    ]
}