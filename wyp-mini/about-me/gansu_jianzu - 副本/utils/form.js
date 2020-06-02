Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = {
    id: 1,
    name: "我是自定义表单",
    config: {
        mode: "row/column",
        marginBottom: "10rpx",
        backgroundColor: "#ffffff"
    },
    submit: {
        name: "确定",
        backgroundColor: "red",
        fontColor: "black",
        toast: "表单提交成功"
    },
    fields: [ {
        name: "field99",
        label: "我是个picker",
        type: "picker",
        placeholder: "请选择",
        options: [ {
            id: 1,
            value: "男",
            checked: !0
        }, {
            id: 2,
            value: "女"
        } ],
        validations: {
            presence: {
                allowEmpty: !1
            }
        }
    }, {
        name: "field1",
        label: "姓名",
        type: "text",
        placeholder: "请填写姓名",
        validations: {
            presence: {
                allowEmpty: !1
            }
        }
    }, {
        name: "field2",
        label: "手机号",
        type: "text",
        placeholder: "请填写手机号码",
        validations: {
            presence: {
                allowEmpty: !1
            },
            cellphone: !0
        }
    }, {
        name: "field3",
        label: "电子邮箱",
        type: "text",
        placeholder: "请填写电子邮箱",
        validations: {
            presence: {
                allowEmpty: !1
            },
            email: !0
        }
    }, {
        name: "field4",
        label: "个人主页",
        type: "text",
        placeholder: "请填写个人主页地址",
        validations: {
            presence: {
                allowEmpty: !1
            },
            url: !0
        }
    }, {
        name: "field5",
        label: "身份证号",
        type: "text",
        placeholder: "请填写身份证号码",
        validations: {
            presence: {
                allowEmpty: !1
            },
            idcard: !0
        }
    }, {
        name: "field15",
        label: "电话号码",
        type: "number",
        placeholder: "请填写身份证号码",
        validations: {
            presence: {
                allowEmpty: !1
            },
            numericality: {
                onlyInteger: !1,
                greaterThanOrEqualTo: 0,
                lessThanOrEqualTo: 30,
                decimal: 2
            }
        }
    }, {
        name: "field6",
        type: "radio",
        mode: "text",
        label: "性别",
        options: [ {
            id: 1,
            value: "男",
            checked: !0
        }, {
            id: 2,
            value: "女"
        } ],
        validations: {
            presence: {
                allowEmpty: !1
            }
        }
    }, {
        name: "field7",
        type: "radio",
        mode: "image",
        label: "请选择照片",
        options: [ {
            id: 1,
            checked: !0,
            imgUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1287740963,2048179542&fm=27&gp=0.jpg",
            value: "男"
        }, {
            id: 2,
            imgUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=343974559,780603549&fm=27&gp=0.jpg",
            value: "女"
        }, {
            id: 3,
            imgUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3702339158,635303188&fm=11&gp=0.jpg",
            value: "女"
        }, {
            id: 4,
            imgUrl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3052387893,146229132&fm=27&gp=0.jpg",
            value: "女"
        }, {
            id: 5,
            imgUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2242980108,2232816867&fm=27&gp=0.jpg",
            value: "女"
        }, {
            id: 6,
            imgUrl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=752075015,280752760&fm=27&gp=0.jpg",
            value: "女"
        } ],
        validations: {
            presence: {
                allowEmpty: !1
            }
        }
    }, {
        name: "field8",
        type: "checkbox",
        label: "爱好",
        mode: "text",
        options: [ {
            id: 1,
            value: "请选择出生日期请选择出生日期请选择出生日期请选择出生日期请选择出生日期哈哈哈",
            checked: !0
        }, {
            id: 2,
            value: "呵呵呵",
            checked: !0
        } ],
        validations: {
            presence: {
                allowEmpty: !1
            }
        }
    }, {
        name: "field9",
        type: "checkbox",
        label: "喜欢的美女",
        mode: "image",
        options: [ {
            id: 1,
            imgUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=898521012,1901217851&fm=27&gp=0.jpg",
            value: "哈哈哈"
        }, {
            id: 2,
            imgUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1341080178,3231779462&fm=200&gp=0.jpg",
            value: "呵呵呵"
        } ],
        validations: {
            presence: {
                allowEmpty: !1
            }
        }
    }, {
        name: "field10",
        type: "date",
        mode: "date",
        label: "出生日期",
        placeholder: "请选择出生日期",
        validations: {
            presence: {
                allowEmpty: !1
            }
        }
    }, {
        name: "field11",
        type: "date",
        mode: "datetime",
        label: "到店时间",
        placeholder: "请选择到店时间",
        validations: {
            presence: {
                allowEmpty: !1
            }
        }
    }, {
        name: "field12",
        type: "date",
        mode: "time",
        label: "每天郁闷时间",
        placeholder: "请选择时间",
        validations: {
            presence: {
                allowEmpty: !1
            }
        }
    }, {
        name: "field13",
        type: "location",
        label: "家庭住址",
        placeholder: "请填写家庭住址",
        validations: {
            presence: {
                allowEmpty: !1
            }
        }
    }, {
        name: "field14",
        type: "upload",
        label: "上传个人美拍照",
        validations: {
            presence: {
                allowEmpty: !1
            },
            length: {
                maximum: 3
            }
        }
    }, {
        name: "field17",
        type: "textarea",
        label: "上传个人美拍照",
        placeholder: "上传个人美拍照",
        validations: {
            presence: {
                allowEmpty: !1
            }
        }
    } ]
};

exports.default = e;