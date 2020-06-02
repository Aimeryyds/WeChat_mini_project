var i = require("../../utils/api"), t = (getApp(), require("../../libs/wxParse/wxParse.js"));

Page({
    data: {
        phone: "",
        showModal: !1,
        showLayer: !1,
        showLayerOpen: !1,
        index: -1,
        serviceList: [ {
            icon: "http://qz.faisys.com/image/wxImage/wxAd/1.png",
            serviceText: "免代码搭建"
        }, {
            icon: "http://qz.faisys.com/image/wxImage/wxAd/2.png",
            serviceText: "分享微信好友"
        }, {
            icon: "http://qz.faisys.com/image/wxImage/wxAd/3.png",
            serviceText: "分享到朋友圈"
        }, {
            icon: "http://qz.faisys.com/image/wxImage/wxAd/4.png",
            serviceText: "服务预约"
        }, {
            icon: "http://qz.faisys.com/image/wxImage/wxAd/5.png",
            serviceText: "微信支付"
        }, {
            icon: "http://qz.faisys.com/image/wxImage/wxAd/6.png",
            serviceText: "文章列表"
        }, {
            icon: "http://qz.faisys.com/image/wxImage/wxAd/7.png",
            serviceText: "在线视频"
        }, {
            icon: "http://qz.faisys.com/image/wxImage/wxAd/8.png",
            serviceText: "在线表单"
        }, {
            icon: "http://qz.faisys.com/image/wxImage/wxAd/9.png",
            serviceText: "附近小程序"
        }, {
            icon: "http://qz.faisys.com/image/wxImage/wxAd/10.png",
            serviceText: "小程序搜索优化"
        }, {
            icon: "http://qz.faisys.com/image/wxImage/wxAd/11.png",
            serviceText: "在线客服"
        }, {
            icon: "http://qz.faisys.com/image/wxImage/wxAd/12.png",
            serviceText: "数据统计"
        } ],
        companyGoals: [ {
            id: 201,
            name: "企业/组织官网"
        }, {
            id: 202,
            name: "线下服务门店"
        }, {
            id: 203,
            name: "在线商城"
        }, {
            id: 204,
            name: "内容资讯"
        }, {
            id: 206,
            name: "个人应用"
        }, {
            id: 204,
            name: "其他"
        } ],
        codeBtnText: "获取验证码",
        codeBtnFlag: !1,
        picCodeUrl: "",
        picCodeVal: "",
        picCodeErr: !1,
        picCodeErrText: "图片验证码输入错误，请重新输入",
        isFirstSendCode: !0,
        disableConfirm: !1
    },
    onLoad: function(i) {
        var t = i.ori ? i.ori : 0;
        this.data.ori = t, wx.setNavigationBarTitle({
            title: "凡科轻站"
        });
    },
    onShow: function() {
        1 == this.data.ori && i.logDog(7000032, 5), i.logDog(7000055, 0);
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        i.logDog(7000055, 14);
    },
    phoneInput: function(i) {
        this.setData({
            phone: i.detail.value
        });
    },
    bindPickerChange: function(t) {
        this.setData({
            index: t.detail.value
        }), i.logDog(7000055, 6);
    },
    changePicCode: function(t) {
        var s = this, e = parseInt(1e3 * Math.random());
        wx.getExtConfig({
            success: function(t) {
                if ("getExtConfig: ok" == t.errMsg) {
                    var a = t.extConfig.wxappDomainUrl;
                    i.initAdvertising(s, function() {
                        var i = s.data.code, t = a + "validateCode.jsp?" + e + "&code=" + i;
                        s.setData({
                            picCodeUrl: t
                        });
                    });
                }
            }
        });
    },
    getCode: function() {
        var t = this, s = this.data.phone;
        this.checkPhone(s) && (this.data.isFirstSendCode ? i.logDog(7000055, 1) : i.logDog(7000055, 3), 
        i.getValidateCode(this, function(s) {
            if (!s.data.success && "用户注册过于频繁" == s.data.msg) return t.changePicCode(), void t.showDialogBtn();
            !s.data.success && s.data.existed && wx.showModal({
                title: "",
                showCancel: !1,
                content: "您已经注册过，请到电脑直接登录",
                success: function(i) {}
            }), s.data.success && (t.hasSendCode(), wx.showToast({
                icon: "success",
                duration: 1e3,
                title: s.data.msg
            }), wx.setStorageSync("verCodeSign", s.data.verCodeSign), t.setData({}), i.logDog(7000055, 2));
        }));
    },
    hasSendCode: function() {
        var i = this, t = {
            timer: null,
            second: 60,
            text: ""
        };
        i.setData({
            codeBtnText: "已发送(" + t.second + ")",
            codeBtnFlag: !0,
            isFirstSendCode: !1
        });
        var s = !0;
        t.timer = setInterval(function() {
            t.second > 0 ? (t.second--, t.text = "已发送(" + t.second + ")") : (t.text = "重新获取", 
            clearInterval(t.timer), t.timer = null, s = !1), i.setData({
                codeBtnText: t.text,
                codeBtnFlag: s
            });
        }, 1e3);
    },
    checkPhone: function(i) {
        var t = i.replace(/(^\s*)|(\s*$)/g, "");
        if (!t) return wx.showModal({
            title: "",
            showCancel: !1,
            content: "请填写手机号码！",
            success: function(i) {}
        }), !1;
        var s = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
        return !(11 != t.length || !s.test(t)) || (wx.showModal({
            title: "",
            showCancel: !1,
            content: "请填写正确的手机号码！",
            success: function(i) {}
        }), !1);
    },
    registerSubmit: function(t) {
        i.logDog(7000055, 5);
        var s = t.detail.value, e = this;
        for (var a in s) {
            if ("phone" == a && !e.checkPhone(s[a])) return void i.logDog(7000055, 7);
            if ("password" == a) {
                var c = s[a].length;
                if (!(o = s[a].replace(/(^\s*)|(\s*$)/g, ""))) return i.logDog(7000055, 8), void wx.showModal({
                    title: "",
                    showCancel: !1,
                    content: "请填写密码",
                    success: function(i) {}
                });
                if (c < 4 || c > 20) return i.logDog(7000055, 9), void wx.showModal({
                    title: "",
                    showCancel: !1,
                    content: "密码不符合要求，请输入4 - 20字符",
                    success: function(i) {}
                });
            }
            if ("code" == a) {
                var o = s[a].replace(/(^\s*)|(\s*$)/g, "");
                if (!o || 4 != o.length) return o || i.logDog(7000055, 10), void wx.showModal({
                    title: "",
                    showCancel: !1,
                    content: "请填写正确的验证码！",
                    success: function(i) {}
                });
            }
            if ("use" == a) {
                var d = "";
                if (s.use && (d = this.data.companyGoals[1 * s.use].id), !d) return i.logDog(7000055, 12), 
                void wx.showModal({
                    title: "",
                    showCancel: !1,
                    content: "请选择您的注册用途",
                    success: function(i) {}
                });
                e.setData({
                    registerDataUse: d
                });
            }
            if ("agree" == a && 0 == s[a].length) return i.logDog(7000055, 13), void wx.showModal({
                title: "",
                showCancel: !1,
                content: "您尚未同意服务条款",
                success: function(i) {}
            });
        }
        i.regCorpNew(this, function(t) {
            t.data.success ? (e.setData({
                showLayerOpen: !0
            }), i.logDog(7000055, 4)) : wx.showModal({
                title: "",
                showCancel: !1,
                content: "注册失败！",
                success: function(i) {}
            });
        }, s);
    },
    showDialogBtn: function() {
        this.setData({
            showModal: !0,
            disableConfirm: !1
        });
    },
    preventTouchMove: function() {},
    hideModal: function() {
        this.setData({
            showModal: !1,
            picCodeErr: !1
        });
    },
    onConfirm: function() {
        var t = this, s = this.data.picCodeVal;
        s ? 4 == s.length ? i.getValidateCode(this, function(s) {
            s.data.success ? (t.hideModal(), t.hasSendCode(), wx.showToast({
                icon: "success",
                duration: 1e3,
                title: s.data.msg
            }), wx.setStorageSync("verCodeSign", s.data.verCodeSign), t.setData({
                picCodeErr: !1
            }), i.logDog(7000055, 2)) : (t.setData({
                picCodeErr: !0,
                picCodeErrText: s.data.msg
            }), s.data.repeatSend && t.setData({
                disableConfirm: !0
            }));
        }, s, this.data.sign) : t.setData({
            picCodeErr: !0,
            picCodeErrText: "图片验证码输入错误，请重新输入"
        }) : t.setData({
            picCodeErr: !0,
            picCodeErrText: "请填图片验证码！"
        });
    },
    picCodeIput: function(i) {
        this.setData({
            picCodeVal: i.detail.value
        });
    },
    modalHandle: function(i) {
        var s = this, e = "";
        "service" == i.currentTarget.dataset.type ? (e = "服务条款", t.wxParse("layerContent", "html", '<p class="blueText">欢迎阅读凡科网服务条款(下称“本条款”)。本条款阐述之条款和条件适用于您在凡科网平台无偿或有偿使用凡科网产品（包括但不限于建站、互动、微传单、邮箱等凡科网产品）。凡科网是广州凡科互联网科技股份有限公司（下称凡科公司）运营的网站，本条款所述的凡科网产品为凡科公司旗下产品。</p><div class="contrList"><div class="contrTitle">1. 接受条款</div><div class="contrText">以任何方式使用凡科网产品即表示您同意自己已经与凡科公司就凡科网平台服务事项（下称凡科网服务）订立本条款，且您将受本条款的条件约束。您应在第一次登录后仔细阅读本条款，并有权选择停止或继续使用凡科网服务；一旦您继续使用凡科网服务， 则表示您已接受本条款，当您与凡科公司、凡科网发生争议时，应以本条款作为约束双方的条款。除另行明确声明外，任何使凡科网服务范围扩大或功能增强的新内容均受本条款约束。</div></div><div class="contrList"><div class="contrTitle">2.谁可使用凡科网平台</div><div class="contrText">凡科网服务仅供能够根据相关法律订立具有法律约束力的合约的主体使用。如不符合本项条件，请勿使用凡科网服务。凡科网服务不会提供给被暂时或永久中止资格的凡科网会员。</div></div><div class="contrList"><div class="contrTitle">3. 收费</div><div class="contrText">凡科公司保留在根据本条款第1条通知您后，收取凡科网服务费用的权利。您因进行交易、向凡科公司获取有偿服务或接触凡科公司服务器而发生的所有应纳税赋，以及相关硬件、软件、通讯、网络服务及其他方面的费用均由您自行承担。凡科公司保留在无须发出书面通知，仅在凡科网平台公示的情况下，暂时或永久地更改或停止部分或全部凡科网服务的权利。</div></div><div class="contrList"><div class="contrTitle">4. 您的资料</div><div class="contrText">您可能会提交资料以作与凡科网服务有关的使用。除了凡科公司授权给您使用的资料，凡科公司不提出拥有对您所发布或者向凡科公司提供（称为“提交”）的与凡科网服务有关的资料的所有权。但是，经您发布或以其他方式提交的资料，您授予凡科公司免费许可： 做与服务有关的使用、复制、传播、显示、发表和修改； 在与您的提交有关时发布您的姓名或单位名称； 将这些许可授予其他人。 本节仅适用于法律所允许的内容并仅适用于在不违反法律的限度内使用和发布上述法律所允许的内容。凡科公司不会为您的提交向您支付费用。凡科公司有权拒绝发布，并且有权随时从凡科网服务中删除您的提交。您应当对您所做出的每一提交享有以实施本节所规定的授权行为所必要的完整权利。</div></div><div class="contrList"><div class="contrTitle">5. 隐私</div><div class="contrText">为了协作和提供服务，凡科公司会收集您的某些信息。此外，凡科公司还可以访问或者透露关于您的信息，包括您通讯的内容，以：(a) 遵守法律、响应司法要求或法律程序；(b) 保护凡科公司及其客户的权利、财产，包括协议的执行和遵守适用于服务的策略；(c) 保护凡科公司及其雇员、客户和公众的权利、财产或安全。 凡科公司可采取技术或其他措施以保护凡科网服务，保护凡科公司的客户，或阻止您违反本合同。这些措施可能包括，例如，通过过滤来阻止垃圾邮件或提高安全级别。这些措施可能阻止或中断您对服务的使用。 为了向您提供服务，凡科公司可收集有关服务状况，您的机器和您对服务的使用的某些信息。凡科公司有权从您的机器自动上传这些信息。这些数据不会构成对您私人身份的确认。</div></div><div class="contrList"><div class="contrTitle">6. 终止或访问限制</div><div class="contrText">在您未向凡科网支付服务费用的情况下，凡科公司可自行全权决定以任何理由 (包括但不限于凡科公司认为您已违反本条款的字面意义和精神，或您以不符合本条款的字面意义和精神的方式行事，或您在超过30天的时间内未以您的帐号及密码登录凡科网产品) 终止您对凡科网服务的使用，及可自行全权决定以任何理由 (包括但不限于凡科公司认为您已违反本条款的字面意义和精神，或您以不符合本条款的字面意义和精神的方式行事，或您在超过60天的时间内未以您的帐号及密码登录凡科网产品) 终止您的凡科网服务密码、账户 (或其任何部份) 或并删除和丢弃您在使用凡科网服务中提交的 “您的资料”。根据本条款的任何规定终止您使用凡科网服务之措施可在不发出事先通知的情况下实施，并承认和同意，凡科公司可立即使您的账户无效，或撤销您的账户以及在您的账户内的所有相关资料和档案，和/或禁止您进一步接入该等档案或凡科网服务。帐号终止后，凡科公司没有义务为您保留原帐号中或与之相关的任何信息，或转发任何未曾阅读或发送的信息给您或第三方。此外，凡科公司不会就终止您接入凡科网服务而对您或任何第三者承担任何责任。第8、9和10各条应在本条款终止后继续有效。</div></div><div class="contrList"><div class="contrTitle">7. 违反本服务条款的法律责任</div><div class="contrText" style="padding-bottom:0px;">（1）在不限制其他补救措施的前提下，发生下述任一情况，凡科公司可立即发出警告，暂时中止、永久中止或终止您的会员资格，不退还已交付款项并删除您的任何现有产品信息，以及您在网站上展示的任何其他资料：(i) 您违反本条款；(ii) 凡科公司无法核实或鉴定您向凡科公司提供的任何资料； (iii) 凡科公司相信您的行为可能会使您、凡科公司用户或通过凡科公司或凡科公司产品提供服务的第三者服务供应商发生任何法律责任；(iv)<font>发表、传送、传播、储存个人网站类，在线音视频类，刷钻/刷QB/QQ业务/刷流量/taobao刷信誉类，色情/成人内容/低俗内容类，游戏类/代练/涉及交易的虚拟物品类，彩票预测/赌博类内容网站，盗号/外挂/私服/辅助类，代办证/代考/代开发票类，黑客/网站挂马/放置病毒/收费下载/收费传授黑客技术类，虚假信息/诈骗信息类等， 不利国家与社会稳定和谐，违反国家相关法律与政策的内容，将配合有关部门追究责任。</font>（v）利用凡科公司的邮箱系统发送垃圾邮件，垃圾邮件指未经第三方许可，而强行发送至第三方邮件中的电子邮件，或同时发送给大量用户，影响正常网络通信的电子邮件，或含有恶意、虚假、伪装等信息的电子邮件。</div><div class="contrText">（2）若您的网站被第三方攻击，给凡科网或凡科网其他用户造成影响的，凡科公司有权选择以下任一方式处理：（i）凡科公司通知您立即采取接入第三方防御服务的措施，若您于接到通知后三日内未处理，凡科公司有权直接关停您的网站，且无需承担任何责任；（ii）凡科公司直接关闭您的网站，并向您退回剩余服务期限对应的服务费（购买时采用代金券的，凡科公司将不予退款）。本条所称的第三方攻击仅指您的网站内容未违反本服务条款的情况下所受的恶意攻击。因您的网站内容违反本服务条款而遭受的攻击，不属于本条所称的网站攻击范畴。</div></div><div class="contrList"><div class="contrTitle">8. 服务“按现状”和“按可得到”的基础提供</div><div class="contrText">凡科公司会尽一切努力使您在使用凡科网产品的过程中得到乐趣。遗憾的是，凡科公司不能随时预见到任何技术上的问题或其他困难。该等困难可能会导致数据损失或其他服务中断，或根据市场需求，适当变更服务内容的某种功能。为此，您明确理解和同意，您使用凡科网服务的风险由您自行承担。凡科网服务以“按现状”和“按可得到”的基础提供。凡科公司明确声明不作出任何种类的所有明示或暗示的保证，包括但不限于关于适销性、适用于某一特定用途和无侵权行为等方面的保证。凡科公司对下述内容不作保证：(i)凡科网服务会符合您的要求；(ii)凡科网服务不会中断，且适时、安全和不带任何错误；(iii) 通过使用凡科网服务而可能获取的结果将是准确或可信赖的；及 (iv) 您通过凡科网服务而购买或获取的任何产品、服务、资料或其他材料的质量将符合您的预期。通过使用凡科网服务而下载或以其他形式获取任何材料是由您自行全权决定进行的，且与此有关的风险由您自行承担，对于因您下载任何该等材料而发生的您的电脑系统的任何损毁或任何数据损失，您将自行承担责任。您从凡科网或通过或从凡科网服务获取的任何口头或书面意见或资料，均不产生未在本条款内明确载明的任何保证。</div></div><div class="contrList"><div class="contrTitle">9. 责任范围</div><div class="contrText">您明确理解和同意，凡科公司不对因下述任一情况而发生的任何损害赔偿承担责任，包括但不限于利润、商誉、使用、数据等方面的损失或其他无形损失的损害赔偿 (无论凡科公司是否已被告知该等损害赔偿的可能性)：(i) 使用或未能使用凡科网服务；(ii) 因通过或从凡科网服务购买或获取任何货物、样品、数据、资料或服务，或通过或从凡科网服务接收任何信息或缔结任何交易所产生的获取替代货物和服务的费用；(iii) 未经批准接入或更改您的传输资料或数据；(iv) 任何第三者对凡科网服务的声明或关于凡科网服务的行为；或 (v) 因任何原因而引起的与凡科网服务有关的任何其他事宜，包括疏忽。</div></div><div class="contrList"><div class="contrTitle">10. 赔偿</div><div class="contrText">您同意，因您违反本条款或经在此提及而纳入本条款的其他文件，或因您违反了法律或侵害了第三方的权利，而使第三方对凡科公司及其子公司、分公司、董事、职员、代理人提出索赔要求（包括但不限于司法费用和其他专业人士的费用，含律师费等），您必须赔偿给凡科公司及其分公司、董事、职员、代理人，使其等免遭损失。</div></div><div class="contrList"><div class="contrTitle">11. 遵守法律</div><div class="contrText">您在凡科网上不得发布各类违法或违规信息。您应遵守与您使用凡科网服务，以及与您竞买、购买和销售任何物品以及提供商贸信息有关的所有相关的法律、法规、条例和规章。</div></div><div class="contrList"><div class="contrTitle">12. 广告和金融服务</div><div class="contrText">您与在凡科网服务上或通过凡科网服务物色的刊登广告人士通讯或进行业务往来或参与其推广活动，包括就相关货物或服务付款和交付相关货物或服务，以及与该等业务往来相关的任何其他条款、条件、保证或声明，仅限于在您和该刊登广告人士之间发生。您同意，对于因任何该等业务往来或因在凡科网服务上出现该等刊登广告人士而发生的任何种类的任何损失或损毁，凡科公司无需负责或承担任何责任。您如打算通过凡科网服务创设或参与与任何公司、股票行情、投资或证券有关的任何服务，或通过凡科网服务收取或要求与任何公司、股票行情、投资或证券有关的任何新闻信息、警戒性信息或其他资料，敬请注意，凡科公司不会就通过凡科网服务传送的任何该等资料的准确性、有用性或可用性、可获利性负责或承担任何责任，且不会对根据该等资料而作出的任何交易或投资决策负责或承担任何责任。</div></div><div class="contrList"><div class="contrTitle">13. 您对凡科公司的通知</div><div class="contrText">您可以通过凡科网平台公布的凡科公司联系信息向凡科公司发出书面通知。</div></div><div class="contrList"><div class="contrTitle">14. 凡科公司向您发出通知</div><div class="contrText">凡科公司向您发出通知，同意使用电子信息。本合同系电子形式。凡科公司承诺向您发送与本服务有关的特定信息，并有权向您发送某些附加信息。凡科公司可能还会向您发送法律要求发送的有关本服务的其他信息。凡科公司可以电子形式向您发送这些信息。您有权取消您的同意，但如果您取消，凡科公司可取消对您的服务。 凡科公司可以下列方式向您提供必需的信息： 通过您在注册凡科网服务时所指明的电子邮件地址向您发送电子邮件； 在信息可供使用时，通过在向您发送的电子邮件通知中指明供访问的某一网站；或通过访问为此目的而通常事先指定的某一网站。 通过电子邮件向您发出的通知将被视为在该电子邮件中标明的传输日期发送并且收到。 在您能够访问和使用凡科网服务期间，您拥有必要的软件和硬件以接受此类通知。如果您不同意以电子形式接受任何通知，那么您应当停止使用凡科网服务。</div></div><div class="contrList"><div class="contrTitle">15. 与第三方网站的链接</div><div class="contrText">提供与第三方网站的链接仅仅为了给您带来方便。如果您使用这些链接，将离开凡科网站点。凡科公司没有审查过所有这些第三方站点，对任何这些站点及其内容或它们的保密政策不进行控制，也不负任何责任。因此，凡科公司对这些网站上的任何信息、软件以及其它产品或材料，或者通过使用它们可能获得的任何结果不予认可，也不作任何表述。如果您决定访问本站点链接的任何第三方站点，其风险完全由您自己承担。</div></div><div class="contrList"><div class="contrTitle">16. 不可抗力</div><div class="contrText">由于自然灾害、罢工或骚乱、物质短缺或定量配给、暴动、战争行为、政府行为、通电信网络、供电单位采取的限电或断电措施、供电单位的电力设施故障、通讯或其他设施故障或严重伤亡事故、黑客攻击、尚无有效防御措施的计算机病毒的发作及其他各方不能预见并且对其发生和后果不能防止并避免的不可抗力原因，致使凡科公司延迟或未能履约的，凡科公司不对您承担任何责任。</div></div><div class="contrList"><div class="contrTitle">17. 关于网络</div><div class="contrText">您明白由于因特网上通路的阻塞或造成访问速度下降，均是正常，不属于凡科公司违约，若遇电信运营商或国家政策等原因造成的网络中断，凡科公司不承担相应责任。</div></div><div class="contrList"><div class="contrTitle">18. 关于版权</div><div class="contrText">以任何方式使用凡科网提供的服务，包括但不限于基于凡科网搭建的企业网站、企业邮箱等服务，所涉及的版权归凡科公司或有权的第三方所有。<br>您在使用凡科网提供的服务时，应当保证相关版权的完整性，特别地，对于凡科网的模板图片，您不得恶意篡改、任意拆分、组合，涉及人物图片的，您不得将图片进行分割或与其他图像进行组合。否则，凡科公司有权终止为您提供凡科网服务，并不予退还服务费。若因您的该些行为给凡科公司造成损失的，您还应当承担赔偿责任。若造成图片肖像权人向凡科公司主张权利的，凡科公司有权向您追偿。</div></div><div class="contrList"><div class="contrTitle">19. 关于退款</div><div class="contrText">        1、购买以下所列凡科网产品的客户，支付完成后7天内（从购买当天算起）终止服务的，可申请无理由全额退款，具体包括：首次购买网站版本、首次购买的互动版本且所有已发布活动的新增浏览人数不超过100人、首次购买的微传单版本且所有已发布微传单的新增流量不超过100pv、首次购买小程序版本、首次购买邮箱版本，400号码开户券和400号码充值券。<br>        2、凡购买网站专业版、商城基础版、商城旗舰版，并在30天内绑定域名的客户，分以下情况可申请网站无条件全额退款：<br>        (i)购买网站后30天内在凡科网平台购买域名的，自购买域名之日起30天内没有被百度收录的；<br>        (ii) 购买网站后30天内绑定非在凡科网平台购买的域名，自客户向凡科公司发出网站已绑定域名通知之日起30天内没有被百度收录的。<br>        申请退款的客户需向凡科公司提供：网站的凡科网帐号、管理员帐号和密码；接收退款的银行信息，包括完整开户行信息（如：xx省xx市分行xx支行）、银行账号、账户名（姓名）。退款不收取任何费用，退款完成后将不再享受凡科网提供的服务。<br>       以上退款均以您未违反本条款约定为前提。</div></div><div class="contrList"><div class="contrTitle">20. 适用法律和管辖</div><div class="contrText">本条款适用于中国法律并依照中国法律解释，不会造成任何法律的冲突。任何因有关使用凡科网各产品而发生的诉讼均应提交广州仲裁委员会申请仲裁。 如果您还有疑问，您可以直接给凡科公司客服中心留言。</div></div>', s, 5)) : (e = "法律声明", 
        t.wxParse("layerContent", "html", '<div class="discList"><div class="discText">1、在进入凡科网平台后或使用凡科网平台各项服务前，请您务必仔细阅读并透彻理解本声明。您可以选择不使用凡科网平台服务，但如果您使用凡科网平台服务的，您的使用行为将被视为对本声明全部内容的认可。“凡科网平台”指由广州凡科互联网科技股份有限公司（简称“凡科公司”）运营的各产品服务系统平台，域名为 fkw.com以及凡科公司启用的其他域名。</div></div><div class="discList"><div class="discText">2、鉴于：<div style="text-indent:25px;">凡科公司提供的服务属于企业自助搭建服务，用户在凡科网平台注册后，即可通过凡科网平台搭建网站、创建互动小游戏、微传单、微信公众号等，且通过凡科网平台生成的网站、互动小游戏、微传单、微信公众号上发布的相关资讯、产品、服务（包括但不限于企业名称、联系人及联络信息，产品/服务的描述和说明，图片、视频，视讯等）的信息均由用户自行提供上传，凡科公司仅提供信息存储空间服务。但由于凡科公司无法对用户所上传的内容是否违法、侵权进行有效判断，为了维护互联网秩序、维护广大权利人的合法权益，因此：</div><div style="text-indent:25px;">（1）凡科公司保证用户所上传内容的完整性，不对其进行任何形式的编辑、更改、篡改；</div><div style="text-indent:25px;">（2）用户依法应当保证所上传的内容不违反法律规定、不损害他人的合法权益，否则应承担全部、最终责任；</div><div style="text-indent:25px;">（3）凡科公司有权配合网络监管部门对用户所上传的内容进行关键字、关键图片等关键信息的筛查，并对违法、侵权网站、互动小游戏、微传单、微信公众号等作出关闭措施，或删除违法、侵权信息，或断开违法、侵权信息链接等。</div><div style="text-indent:25px;">（4）若用户所上传的内容侵权的，权利人可通过凡科网平台公布的邮箱、地址等联系方式，向凡科公司发出书面通知，要求凡科公司关闭违法、侵权网站，或删除违法、侵权信息，或断开违法、侵权信息链接，同时提交权属证明、详细的侵权情况说明以及身份证明（自然人提供身份证复印件、法人提供营业执照复印件加盖公章）。凡科公司在收到上述材料后会采取相应措施，防止侵权损害的进一步扩大。权利人（通知人）应当保证用户侵权的真实性，否则应当承担由此造成的全部法律责任。</div></div></div><div class="discList"><div class="discText">3、除凡科网平台注明之服务条款外，用户在使用凡科网平台服务过程中发生的任何意外、疏忽、合约毁坏、诽谤、版权或知识产权侵权及其所造成的损失（包括因下载而感染电脑病毒），凡科公司不承担任何法律责任。</div></div><div class="discList"><div class="discText">4、凡科网产品中的部分字体、图片等涉及第三人的知识产权且该第三人已许可凡科公司使用，若您在使用凡科网产品时需要用到该部分作品的，请您向知识产权人取得授权，否则您将可能侵害知识产权人的合法权利，由此造成的纠纷，您应当自行与知识产权人解决，与凡科公司无关。若因您侵害第三人的权利导致凡科公司向第三人承担责任的，凡科公司有权向您追偿。</div></div><div class="discList"><div class="discText">5、凡科公司保留随时修改凡科网服务条款及法律声明之权利，并通过网络于凡科网平台公示修改之后内容，不另行个别通知。若您于服务条款、法律声明修改后仍继续使用凡科网平台的，即表示您同意修改后之内容。</div></div>', s, 5)), 
        this.setData({
            showLayer: !0,
            layerType: e
        });
    },
    hideLayer: function(i) {
        this.setData({
            showLayer: !1
        });
    },
    hasKnow: function() {
        this.setData({
            showLayerOpen: !1
        }), wx.navigateTo({
            url: "/pages/index/index"
        }), wx.switchTab({
            url: "/pages/index/index"
        });
    },
    copySiteUrl: function() {
        var i = this;
        wx.setClipboardData({
            data: "http://qz.fkw.com/",
            success: function(t) {
                wx.getClipboardData({
                    success: function(t) {
                        wx.showModal({
                            title: "复制成功",
                            content: "去电脑登录，制作自己的小程序吧！",
                            showCancel: !1,
                            confirmText: "知道了",
                            success: function(t) {
                                t.confirm && i.hasKnow();
                            }
                        });
                    }
                });
            }
        });
    }
});