var e = require("../netdiisk_requestapi/reportAction.js"), a = {
    index: {
        navTab0: {
            type: "wx_netdisktab_click",
            value: "首页网盘文件tab"
        },
        navTab1: {
            type: "wx_sharetab_click",
            value: "首页共享文件tab"
        },
        navTab2: {
            type: "wx_usercenter_click",
            value: "首页我的tab"
        },
        indexShare: {
            type: "wx_index_share",
            value: "首页右上角转发"
        },
        goLogin: {
            type: "wx_index_gologin",
            value: "空白页登录按钮"
        },
        deleteTemDir: {
            type: "wx_index_deletetemdir",
            value: "删除共享创建错误生成临时普通文件夹"
        },
        connectBtnClick: {
            type: "wx_index_connectbtn_click",
            value: "意见反馈按钮点击次数"
        },
        indexShow: {
            type: "wx_index_show",
            value: "首页展示"
        },
        upload: {
            type: "wx_index_upload",
            value: "上传按钮点击"
        }
    },
    file: {
        previewOthers: {
            type: "wx_preview_others",
            value: "预览其它文件"
        },
        outDirLimit: {
            type: "wx_out_dirlimit",
            value: "页面层数超过限制"
        },
        shareDocPreview: {
            type: "wx_share_file_preview",
            value: "共享文档预览"
        },
        shareAudioPreview: {
            type: "wx_share_audio_preview",
            value: "共享音频预览"
        },
        shareVideoPreview: {
            type: "wx_share_video_preview",
            value: "共享视频预览"
        },
        shareImgPreview: {
            type: "wx_share_image_preview",
            value: "共享图片预览"
        },
        shareDocPreviewSuccess: {
            type: "wx_share_file_previewSuccess",
            value: "共享文档预览成功"
        },
        shareAudioPreviewSuccess: {
            type: "wx_share_audio_previewSuccess",
            value: "共享音频预览成功"
        },
        shareVideoPreviewSuccess: {
            type: "wx_share_video_previewSuccess",
            value: "共享视频预览成功"
        },
        shareImgPreviewSuccess: {
            type: "wx_share_image_previewSuccess",
            value: "共享图片预览成功"
        },
        normalVideoPreview: {
            type: "wx_normal_video_preview",
            value: "网盘视频预览"
        },
        videoPreviewMode: {
            type: "wx_video_preview_mode",
            value: "网盘视频预览横竖屏"
        },
        normalAudioPreview: {
            type: "wx_normal_audio_preview",
            value: "网盘音频预览"
        },
        normalDocPreview: {
            type: "wx_normal_file_preview",
            value: "网盘文档预览"
        },
        normalImgPreview: {
            type: "wx_normal_image_preview",
            value: "网盘图片预览"
        },
        normalVideoPreviewSuccess: {
            type: "wx_normal_video_previewSuccess",
            value: "网盘视频预览成功"
        },
        normalAudioPreviewSuccess: {
            type: "wx_normal_audio_previewSuccess",
            value: "网盘音频预览成功"
        },
        normalDocPreviewSuccess: {
            type: "wx_normal_file_previewSuccess",
            value: "网盘文档预览成功"
        },
        normalImgPreviewSuccess: {
            type: "wx_normal_image_previewSuccess",
            value: "网盘图片预览成功"
        },
        videoTranscodeFail: {
            type: "wx_video_transcode_fail",
            value: "视频转码失败"
        },
        videoNotSupport: {
            type: "wx_shipin_transcode_notSupport",
            value: "视频格式不支持"
        },
        docTrancodeIng: {
            type: "wx_file_transcode_ing",
            value: "文档转码中"
        },
        docTrancodeFail: {
            type: "wx_file_transcode_fail",
            value: "文档转码失败"
        },
        docTenPage: {
            type: "wx_file_tenpages",
            value: "文档仅可看10页"
        },
        docPreviewFailed: {
            type: "wx_file_fail_preview",
            value: "文档无法查看"
        },
        audioPreviewFailed: {
            type: "wx_audio_fail_preview",
            value: "音频无法查看"
        },
        shareChangeView: {
            type: "wx_share_changeView",
            value: "共享切换视图"
        },
        normalChangeView: {
            type: "wx_normal_changeView",
            value: "网盘切换视图"
        },
        flowBtnShow: {
            type: "wx_flow_btn_show",
            value: "流量观看按钮弹出"
        },
        flowPreview: {
            type: "wx_flow_preview",
            value: "流量观看"
        },
        thumbnailBatchChoose: {
            type: "wx_thumbnail_batch_choose",
            value: "缩略图批选"
        },
        thumbnailLongTouch: {
            type: "wx_thumbnail_long_touch",
            value: "缩略图长按进入批选"
        },
        sharePageDocPreview: {
            type: "wx_sharepage_document_preview",
            value: "外链分享文档预览"
        },
        sharePageVideoPreview: {
            type: "wx_sharepage_video_preview",
            value: "外链页视频预览"
        },
        sharePageAudioPreview: {
            type: "wx_sharepage_audio_preview",
            value: "外链分享音频预览"
        },
        sharePageImgPreview: {
            type: "wx_sharepage_image_preview",
            value: "外链分享图片预览"
        },
        sharePageDocPreviewSuccess: {
            type: "wx_sharepage_file_previewSuccess",
            value: "外链分享文档预览成功"
        },
        sharePageVideoPreviewSuccess: {
            type: "wx_sharepage_video_previewSuccess",
            value: "外链页视频预览成功成功"
        },
        sharePageAudioPreviewSuccess: {
            type: "wx_sharepage_audio_previewSuccess",
            value: "外链分享音频预览成功"
        },
        sharePageImgPreviewSuccess: {
            type: "wx_sharepage_image_previewSuccess",
            value: "外链分享图片预览成功"
        },
        normalImgPreviewShareBtnClick: {
            type: "wx_normal_imagepreview_share_click",
            value: "图片预览页 分享按钮点击"
        },
        normalImgPreviewDownLoadBtnClick: {
            type: "wx_normal_imagepreview_download_click",
            value: "图片预览页 下载"
        },
        originImgPreview: {
            type: "wx_origin_img_preview",
            value: "图片预览页 查看原图"
        },
        normalImgPreviewViewOriginClick: {
            type: "wx_normal_imagepreview_vieworigin_click",
            value: "图片预览页 查看原图"
        },
        storyImgPreviewViewOriginClick: {
            type: "wx_normal_imagepreview_vieworigin_click",
            value: "图片预览页 查看原图"
        },
        VideoPreviewShare: {
            type: "wx_video_preview_share",
            value: "在视频预览页分享"
        },
        AudioPreviewShare: {
            type: "wx_audio_preview_share",
            value: "在音频预览页分享"
        },
        uploadWxFile: {
            type: "wx_upload_wx_file",
            value: "上传微信文件"
        }
    },
    normal: {
        modifiedShareDirName: {
            type: "wx_normallist_modifename",
            value: "网盘目录更多按钮重命名"
        },
        modifiedShareDirNameSuccess: {
            type: "wx_normallist_modifename_success",
            value: "网盘目录更多按钮重命名成功"
        },
        createNewDir: {
            type: "wx_normaldir_createnewdir",
            value: "网盘目录内新建文件夹"
        },
        createNewDirSuccess: {
            type: "wx_normaldir_createnewdir_success",
            value: "网盘目录内新建文件夹成功"
        },
        batch_click: {
            type: "wx_normal_batch_click",
            value: "网盘目录内批量管理点击次数"
        },
        batch_pickall: {
            type: "wx_normal_batch_pickall",
            value: "网盘目录内批量管理全选"
        },
        batch_pickall_cancel: {
            type: "wx_normal_batch_pickall_cancel",
            value: "网盘目录内批量管理取消全选"
        },
        batch_delete: {
            type: "wx_normal_batch_delte",
            value: "网盘目录内批量管理删除"
        },
        batch_delete_sure: {
            type: "wx_normal_batch_delete_confirm",
            value: "网盘目录内删除点击确认"
        },
        batch_delete_sure_success: {
            type: "wx_normal_batch_delete_confirm_success",
            value: "网盘目录内删除点击确认后删除成功"
        },
        batch_rename: {
            type: "wx_normal_batch_rename",
            value: "网盘目录内批量管理重命名"
        },
        list_delete: {
            type: "wx_normal_list_delete",
            value: "网盘目录内更多点击删除"
        },
        list_delete_success: {
            type: "wx_normal_list_delete_success",
            value: "网盘目录内删除成功"
        },
        longtab_batch: {
            type: "wx_normal_longtab_batch",
            value: "网盘目录长按批量管理"
        },
        normalBtnMoreClick: {
            type: "wx_normalbtn_more_click",
            value: "网盘文件tab文件item更多按钮点击数"
        },
        normalBtnShareToClick: {
            type: "wx_normalbtn_shareto_click",
            value: "网盘文件tab共享给微信群按钮点击数"
        },
        normalBtnShareToSuccess: {
            type: "wx_normalbtn_shareto_success",
            value: "网盘文件tab共享给微信群发送成功"
        },
        normalBtnShareToGroup: {
            type: "wx_normalbtn_shareto_group",
            value: "网盘文件tab共享给微信群"
        },
        normalBtnShareToSingle: {
            type: "wx_normalbtn_shareto_single",
            value: "网盘文件tab共享给个人"
        },
        normalBtnShareToCreate: {
            type: "wx_normalbtn_shareto_create",
            value: "网盘文件tab共享给微信群无目录创建成功"
        },
        normalBtnShareToCopy: {
            type: "wx_normalbtn_shareto_copy",
            value: "网盘文件tab共享给微信群有目录复制成功"
        },
        visitnormalDir: {
            type: "wx_visit_normaldir",
            value: "网盘文件tab进入文件夹"
        },
        normalDirDetailShare: {
            type: "wx_normaldir_detailshare",
            value: "网盘文件tab文件夹详情右上角分享"
        },
        normalDirDetailShareToClick: {
            type: "wx_normaldir_detailshareto_click",
            value: "网盘文件tab文件夹详情点击+号共享次数"
        },
        normalDirDetailShareToSuccess: {
            type: "wx_normaldir_detailshareto_success",
            value: "网盘文件tab文件夹详情点击+号共享发送成功"
        },
        normalDirDetailShareToGroup: {
            type: "wx_normaldir_detailshareto_group",
            value: "网盘文件tab文件夹详情点击+号共享发到微信群"
        },
        normalDirDetailShareToSingle: {
            type: "wx_normaldir_detailshareto_single",
            value: "网盘文件tab文件夹详情点击+号共享发到个人"
        },
        normalDirDetailShareToCreateSuccess: {
            type: "wx_normaldir_detailshareto_createsuccess",
            value: "网盘文件tab文件夹详情点击+号共享无目录创建成功"
        },
        normalDirDetailShareToCopySuccess: {
            type: "wx_normaldir_detailshareto_copysuccess",
            value: "网盘文件tab文件夹详情点击+号共享有目录复制成功"
        },
        normalDirDetailAddFileBtnClick: {
            type: "wx_normaldirdetail_addfilebtn_click",
            value: "网盘文件tab文件夹详情添加文件按钮点击数"
        },
        normalDirDetailAddLocalFileBtnClick: {
            type: "wx_normaldirdetail_addlocalfilebtn_click",
            value: "网盘文件tab文件夹详情添加本地照片按钮点击数"
        },
        normalDirDetailAddDiskFileBtnClick: {
            type: "wx_normaldirdetail_adddiskfilebtn_click",
            value: "网盘文件tab文件夹详情添加网盘文件按钮点击数"
        },
        normalDirDetailAddFileCloundupload: {
            type: "wx_normaldirdetail_addfile_cloundupload",
            value: "网盘文件tab文件夹详情网盘文件上传"
        },
        normalDirDetailAddFileLocalupload: {
            type: "wx_normaldirdetail_addfile_localupload",
            value: "网盘文件tab文件夹详情本地文件上传"
        },
        normalDirDetailAddFileClounduploadSuccess: {
            type: "wx_normaldirdetail_addfile_cloundupload_success",
            value: "网盘文件tab文件夹详情网盘文件上传成功"
        },
        normalDirDetailAddFileLocaluploadSuccess: {
            type: "wx_normaldirdetail_addfile_localupload_success",
            value: "网盘文件tab文件夹详情本地文件上传成功"
        },
        normalDirDetailAddFileLocaluploadFail: {
            type: "wx_normaldirdetail_addfile_localupload_fail",
            value: "网盘文件tab文件夹详情本地文件上传失败"
        },
        normalDirShareButtonClickCount: {
            type: "wx_normaldir_share_button_click_count",
            value: "网盘首页 下方蓝色分享文件按钮点击的用户数和次数"
        },
        normalDirDetailShareButtonClickCount: {
            type: "wx_normaldirdetail_share_button_click_count",
            value: "网盘详情 下方蓝色分享文件按钮点击的用户数和次数"
        },
        normalShareDirDetailShareButtonClickCount: {
            type: "wx_normalsharedirdetail_share_button_click_count",
            value: "共享文件详情页 下方蓝色分享文件按钮点击的用户数和次数"
        },
        normalDirShareFileButtonClickCount: {
            type: "wx_normaldir_share_file_button_click_count",
            value: "网盘首页 下方蓝色分享文件按钮点击后 进行文件分享操作的用户数和次数"
        },
        normalDirDetailShareFileButtonClickCount: {
            type: "wx_normaldirdetail_share_file_button_click_count",
            value: "网盘详情 下方蓝色分享文件按钮点击后 进行文件分享操作的用户数和次数"
        },
        normalShareDirDetailShareFileButtonClickCount: {
            type: "wx_normalsharedirdetail_share_file_button_click_count",
            value: "共享文件详情页 下方蓝色分享文件按钮点击后 进行文件分享操作的用户数和次数"
        },
        addVideo: {
            type: "wx_add_video",
            value: "添加视频点击"
        },
        addVideoRejecct: {
            type: "wx_add_video_reject",
            value: "添加视频被拒"
        },
        addMessageFile: {
            type: "wx_add_wx_file",
            value: "添加微信文件点击"
        }
    },
    share: {
        modifiedShareDirName: {
            type: "wx_sharelist_modifename",
            value: "共享目录更多按钮重命名"
        },
        modifiedShareDirNameSuccess: {
            type: "wx_sharelist_modifename_success",
            value: "共享目录更多按钮重命名成功"
        },
        createNewDir: {
            type: "wx_sharedir_createnewdir",
            value: "共享目录内新建文件夹"
        },
        createNewDirSuccess: {
            type: "wx_sharedir_createnewdir_success",
            value: "共享目录内新建文件夹成功"
        },
        batch_click: {
            type: "wx_share_batch_click",
            value: "共享目录内批量管理点击次数"
        },
        batch_pickall: {
            type: "wx_share_batch_pickall",
            value: "共享目录内批量管理全选"
        },
        batch_pickall_cancel: {
            type: "wx_share_batch_pickall_cancel",
            value: "共享目录内批量管理取消全选"
        },
        batch_delete: {
            type: "wx_share_batch_delte",
            value: "共享目录内批量管理删除"
        },
        batch_delete_cancel: {
            type: "wx_share_batch_delete_cancel",
            value: "贡献咕噜内批量管理取消"
        },
        batch_delete_sure: {
            type: "wx_share_batch_delete_confirm",
            value: "共享目录内批量删除确认"
        },
        batch_delete_sure_success: {
            type: "wx_share_batch_delete_confirm_success",
            value: "共享目录内批量删除确认删除成功"
        },
        batch_rename: {
            type: "wx_share_batch_rename",
            value: "共享目录内批量管理重命名"
        },
        batch_share_rename_success: {
            type: "wx_share_batch_rename",
            value: "共享目录内重命名点击"
        },
        detaillist_rename: {
            type: "wx_share_rename_renamesuccess",
            value: "共享目录内更多点击重命名成功"
        },
        setshare_rename: {
            type: "wx_share_setshare_rename",
            value: "共享目录内设置共享重命名"
        },
        setshare_rename_success: {
            type: "wx_share_setshare_rename_success",
            value: "共享目录内改名成功"
        },
        longtab_batch: {
            type: "wx_share_longtab_batch",
            value: "共享目录长按批量管理"
        },
        createShareCancelname: {
            type: "wx_createshare_cancelname",
            value: "创建共享重命名取消操作"
        },
        createShareDefaultname: {
            type: "wx_createshare_defaultname",
            value: "默认文件名创建共享"
        },
        createShareChangename: {
            type: "wx_createshare_changename",
            value: "修改文件名创建共享"
        },
        joinShareSuccess: {
            type: "wx_joinshare_success",
            value: "加入共享成功"
        },
        joinSharefromTmplmsg: {
            type: "wx_joinshare_fromtmplmsg",
            value: "服务通知进入共享文件夹"
        },
        joinNormalToShare: {
            type: "wx_joinnormaltoshare",
            value: "加入普通文件夹转换共享目录"
        },
        shareToGroup: {
            type: "wx_sharetogroup",
            value: "共享tab共享到群"
        },
        shareToSingle: {
            type: "wx_sharetosingle",
            value: "共享tab共享到个人"
        },
        createShareToGroup: {
            type: "wx_createsharetogroup",
            value: "共享tab创建共享到群"
        },
        createShareToSingle: {
            type: "wx_createsharetosingle",
            value: "共享tab创建共享到个人"
        },
        createShareCancleSend: {
            type: "wx_createshare_canclesend",
            value: "共享tab创建共享临时会话返回操作"
        },
        joinSurlShare: {
            type: "wx_joinsurlshare",
            value: "通过app短链加入共享"
        },
        joinNormalShareSuccess: {
            type: "wx_joinnormalshare_success",
            value: "加入普通群共享成功"
        },
        joinWxShareSuccess: {
            type: "wx_joinwxshare_success",
            value: "加入微信群共享成功"
        },
        shareBtnMoreClick: {
            type: "wx_sharebtn_more_click",
            value: "共享文件tab文件更多按钮点击数"
        },
        shareBtnAddMemberClick: {
            type: "wx_sharebtn_addmember_click",
            value: "共享文件tab添加共享成员按钮点击数"
        },
        shareAddMemberSendSucess: {
            type: "wx_shareaddmember_sendsuccess",
            value: "共享文件tab添加共享成员发送成功数"
        },
        createShareBtnClick: {
            type: "wx_createsharebtn_click",
            value: "创建群共享按钮点击次数"
        },
        createShareSuccess: {
            type: "wx_createshare_success",
            value: "群内无目录创建共享成功"
        },
        createShareJoinSuccess: {
            type: "wx_createsharejoin_success",
            value: "群内有目录加入共享成功"
        },
        visitShareDir: {
            type: "wx_share_visitsharedir",
            value: "共享文件tab进入共享文件夹"
        },
        shareDirDetailShareClick: {
            type: "wx_sharedirdetail_share_click",
            value: "群共享详情右上角转发"
        },
        shareDirDetailAddMemberClick: {
            type: "wx_sharedirdetail_addmember_click",
            value: "点击+号添加共享成员点击数"
        },
        shareDirDetailAddMemberToGroup: {
            type: "wx_sharedirdetail_addmember_togroup",
            value: "点击+号添加共享成员到微信群"
        },
        shareDirDetailAddMemberToSingle: {
            type: "wx_sharedirdetail_addmember_tosingle",
            value: "点击+号添加共享成员到个人"
        },
        shareDirDetailAddMemberSuccess: {
            type: "wx_sharedirdetail_addmember_success",
            value: "点击+号添加共享成员发送成功数"
        },
        shareDirDetailAddMemberCreateSuccess: {
            type: "wx_sharedirdetail_addmember_createsuccess",
            value: "点击+号添加共享成员无目录创建共享成功"
        },
        shareDirDetailAddMemberJoinSuccess: {
            type: "wx_sharedirdetail_addmember_joinsuccess",
            value: "点击+号添加共享成员有目录加入共享成功"
        },
        shareDetailAddFileBtn: {
            type: "wx_sharedetail_addfilebtn_click",
            value: "共享文件夹详情添加文件按钮"
        },
        shareDetailAddLocalFileBtn: {
            type: "wx_sharedetail_addlocalfilebtn_click",
            value: "共享文件夹详情添加本地照片按钮"
        },
        shareDetailAddDiskFileBtn: {
            type: "wx_sharedetail_adddiskfilebtn_click",
            value: "共享文件夹详情添加网盘文件按钮"
        },
        shareDetailAddFileClounduploadBtn: {
            type: "wx_sharedetail_cloundupload",
            value: "共享文件夹详情网盘文件上传"
        },
        shareDetailAddFileLocaluploadBtn: {
            type: "wx_sharedetail_localupload",
            value: "共享文件夹详情本地上传"
        },
        shareDetailAddFileClounduploadSuccess: {
            type: "wx_sharedetail_cloundupload_success",
            value: "共享文件夹详情网盘文件上传成功"
        },
        shareDetailAddFileLocaluploadSuccess: {
            type: "wx_sharedetail_localupload_success",
            value: "共享文件夹详情本地上传成功"
        },
        shareDetailSettingBtn: {
            type: "wx_sharedetail_settingbtn_click",
            value: "共享文件夹详情设置共享点击"
        },
        shareDetailSettingAddMemberClick: {
            type: "wx_sharedetailsetting_addmember_click",
            value: "共享设置页添加成员+号点击数"
        },
        shareDetailSettingAddMemberSuccess: {
            type: "wx_sharedetailsetting_addmember_success",
            value: "共享设置页添加成员+号发送成功"
        },
        shareDetailSettingAddMemberToGroup: {
            type: "wx_sharedetailsetting_addmember_togroup",
            value: "共享设置页添加成员+号发到微信群"
        },
        shareDetailSettingAddMemberToSingle: {
            type: "wx_sharedetailsetting_addmember_tosingle",
            value: "共享设置页添加成员+号发到个人"
        },
        shareDetailSettingAddMemberCreateSuccess: {
            type: "wx_sharedetailsetting_addmember_createsuccess",
            value: "共享设置页添加成员+号无目录创建成功"
        },
        shareDetailSettingAddMemberJoinSuccess: {
            type: "wx_sharedetailsetting_addmember_joinsuccess",
            value: "共享设置页添加成员+号有目录加入成功"
        },
        singleShareClick: {
            type: "single_share_click",
            value: "文件分享按钮点击的次数和用户数"
        },
        fromSharePageShare: {
            type: "from_share_page_share",
            value: "从外链页进入音视频播放页分享"
        },
        batchShareClick: {
            type: "batch_share_click",
            value: "批选文件分享按钮点击的用户数和次数"
        },
        showNoShareDirHelpVideo: {
            type: "show_ShareDir_HelpVideo_1",
            value: "无共享文件时新手引导展示的用户数和次数"
        },
        clickNoShareDirHelpVideo: {
            type: "click_ShareDir_HelpVideo_1",
            value: "无共享文件时新手引导点击的用户数和次数"
        },
        viewNoShareDirHelpVideo: {
            type: "view_ShareDir_HelpVideo_1",
            value: "无共享文件时新手引导预览成功的用户数和次数"
        },
        showShareDirHelpVideo: {
            type: "show_ShareDir_HelpVideo_2",
            value: "有共享文件时新手引导展示的用户数和次数"
        },
        clickShareDirHelpVideo: {
            type: "click_ShareDir_HelpVideo_2",
            value: "有共享文件时新手引导点击的用户数和次数"
        },
        viewShareDirHelpVideo: {
            type: "view_ShareDir_HelpVideo_2",
            value: "有共享文件时新手引导预览成功的用户数和次数"
        },
        clickDissolveShareGroup: {
            type: "click_dissolve_share_group",
            value: "点击解散群组的用户数和次数"
        },
        clickExitShareGroup: {
            type: "click_exit_share_group",
            value: "点击退出群组的用户数和次数"
        },
        clickDissolveShareGroupDialogSuccess: {
            type: "click_dissolve_share_group_dialog_success",
            value: "点击解散群组后，弹窗点击确认的用户数和次数-success"
        },
        clickDissolveShareGroupDialogFail: {
            type: "click_dissolve_share_group_dialog_fail",
            value: "点击解散群组后，弹窗点击确认的用户数和次数-fail"
        },
        clickDissolveShareGroupDialogFail14: {
            type: "click_dissolve_share_group_dialog_fail_14",
            value: "点击解散群组后，弹窗点击确认的用户数和次数-fail-14"
        },
        clickDissolveShareGroupDialogFail18210: {
            type: "click_dissolve_share_group_dialog_fail_18210",
            value: "点击解散群组后，弹窗点击确认的用户数和次数-fail-共享目录已经被删除或不存在"
        },
        clickExitShareGroupDialogSuccess: {
            type: "click_exit_share_group_dialog_success",
            value: "点击退出群组，弹窗点击确认的用户数和次数-success"
        },
        clickExitShareGroupDialogFail: {
            type: "click_exit_share_group_dialog_fail",
            value: "点击退出群组，弹窗点击确认的用户数和次数-fail"
        },
        clickExitShareGroupDialogFail14: {
            type: "click_exit_share_group_dialog_fail-14",
            value: "点击退出群组，弹窗点击确认的用户数和次数-fail-14"
        },
        clickExitShareGroupDialogFail18210: {
            type: "click_exit_share_group_dialog_fail-18210",
            value: "点击退出群组，弹窗点击确认的用户数和次数-fail-共享目录已经被删除或不存在或已经从该群组移除"
        },
        cickedOutDialogPrompt: {
            type: "cicked_out_dialog_prompt",
            value: "用户弹窗提示被群组踢出/有群组解散的用户数和次数"
        },
        friendsPoster: {
            type: "wx_share_friendsPoster",
            value: "分享至朋友圈点击量"
        },
        successActivityShow: {
            type: "wx_share_success_activity_show",
            value: "外链成功页活动显示"
        },
        failActivityShow: {
            type: "wx_share_fail_activity_show",
            value: "外链失败页活动显示"
        },
        successActivityClick: {
            type: "wx_share_success_activity_click",
            value: "外链成功页活动点击"
        },
        failActivityClick: {
            type: "wx_share_fail_activity_click",
            value: "外链失败页活动点击"
        },
        successActivityCancel: {
            type: "wx_share_success_activity_cancel",
            value: "外链成功页活动取消"
        },
        failActivityCancel: {
            type: "wx_share_fail_activity_cancel",
            value: "外链失败页活动取消"
        },
        subShow: {
            type: "wx_share_sub_show",
            value: "外链订阅展示"
        },
        subClick: {
            type: "wx_share_sub_click",
            value: "外链订阅点击"
        },
        subClose: {
            type: "wx_share_sub_close",
            value: "外链订阅关闭"
        }
    },
    common: {
        discover1001: {
            type: "wx_discover_1001",
            value: "发现栏打开小程序"
        },
        singleChat1007: {
            type: "wx_singlechat_1007",
            value: "单人聊天会话打开小程序卡片"
        },
        groupChat1008: {
            type: "wx_groupchat_1008",
            value: "群聊会话打开小程序卡片"
        },
        scanCode1011: {
            type: "wx_scancode_1011",
            value: "扫描二维码进入小程序"
        },
        pressImgCode1012: {
            type: "wx_pressimgcode_1012",
            value: "长按图片识别二维码"
        },
        albumCode1013: {
            type: "wx_albumcode_1013",
            value: "手机相册选取二维码"
        },
        tmplmsg1014: {
            type: "wx_tmplmsg_1014",
            value: "模板消息打开小程序"
        },
        withshareTicket1044: {
            type: "wx_shareTicket_1044",
            value: "带shareTicket的小程序消息卡片"
        },
        wechatmain1089: {
            type: "wx_wechatmain_1089",
            value: "微信聊天主界面下拉"
        },
        async_fail: {
            type: "wx_async_fail",
            value: "异步化失败"
        },
        async_success: {
            type: "wx_async_success",
            value: "异步化成功"
        },
        sharepage1036: {
            type: "wx_sharepage_1036",
            value: "小程序从APP分享消息卡片的场景打开"
        },
        setCode: {
            type: "wx_set_pcode",
            value: "获取盘口令"
        },
        appUk: {
            type: "wx_app_uk",
            value: "app 获取 uk"
        },
        appUkErr: {
            type: "wx_app_uk_error",
            value: "app 获取 uk 失败"
        },
        appUseUkErr: {
            type: "wx_app_use_uk_error",
            value: "获取 uk 失败且 app uk 无效"
        },
        launchApp: {
            type: "wx_launch_app_show",
            value: "引导下载App页展示"
        },
        launchAppCopy: {
            type: "wx_launch_app_copy",
            value: "引导下载App页复制按钮点击"
        },
        uploadFail: {
            type: "wx_upload_fail",
            value: "上传失败"
        },
        uploadSuccess: {
            type: "wx_upload_success",
            value: "上传成功"
        },
        copyDialog: {
            type: "wx_copy_dialog",
            value: "复制外链"
        },
        copySurl: {
            type: "wx_copy_surl",
            value: "复制外链"
        },
        shareLaunchBtn: {
            type: "wx_share_launch_btn",
            value: "外链打开App按钮"
        },
        imgError: {
            type: "wx_img_load_error",
            value: "图片加载失败"
        },
        originImgError: {
            type: "wx_origin_img_load_error",
            value: "图片加载失败"
        },
        imgLoad: {
            type: "wx_img_load",
            value: "图片加载成功"
        },
        originImgLoad: {
            type: "wx_origin_img_load",
            value: "图片加载成功"
        }
    },
    author: {
        userInfoFirstSuccess: {
            type: "wx_userinfo_first_success",
            value: "进入小程序立即授权成功"
        },
        userInfoSetSuccess: {
            type: "wx_userinfo_set_success",
            value: "进入小程序设置授权成功总数"
        },
        userUnbindClick: {
            type: "wx_userunbind_click",
            value: "点击解绑按钮"
        },
        userUnbindConfirm: {
            type: "wx_userunbind_confirm",
            value: "解绑时点击确认"
        },
        userUnbindSuccess: {
            type: "wx_userunbind_success",
            value: "解绑成功"
        }
    },
    snapshoot: {
        joinShareFromSnapshoot: {
            type: "wx_joinshare_fromsnapshoot",
            value: "中间页卡片加入用户数"
        },
        joinShareFromSnapshootimage: {
            type: "wx_joinshare_fromsnapshoot_image",
            value: "中间页图片类型加入用户数"
        },
        joinShareFromSnapshootvideo: {
            type: "wx_joinshare_fromsnapshoot_video",
            value: "中间页视频类型加入用户数"
        },
        joinShareFromSnapshootempty: {
            type: "wx_joinshare_fromsnapshoot_empty",
            value: "中间页空文件夹加入用户数"
        },
        joinShareFromSnapshootsingle: {
            type: "wx_joinshare_fromsnapshoot_single",
            value: "中间页单文件加入用户数"
        },
        joinShareFromSnapshootmore: {
            type: "wx_joinshare_fromsnapshoot_more",
            value: "中间页多文件列表加入用户数"
        },
        snapshootclick: {
            type: "wx_snapshootclick",
            value: "中间页共享点击数"
        },
        snapfromvideoclick: {
            type: "wx_snap_from_video_click",
            value: "从视频预览页进入中间页共享点击数"
        },
        snapfromaudioclick: {
            type: "wx_snap_from_audio_click",
            value: "从音频预览页进入中间页共享点击数"
        },
        snapshootvideo: {
            type: "wx_snapshootvideo",
            value: "视频中间页生成"
        },
        snapshootimage: {
            type: "wx_snapshootimage",
            value: "图片中间页生成"
        },
        snapshootmore: {
            type: "wx_snapshootmore",
            value: "多文件中间页生成"
        },
        snapshootsingle: {
            type: "wx_snapshootsingle",
            value: "单文件中间页生成"
        },
        snapshootempty: {
            type: "wx_snapshootempty",
            value: "空文件中间页生成"
        },
        snapshootSendvideo: {
            type: "wx_snapshootsend_video",
            value: "视频中间页发送"
        },
        snapshootSendimage: {
            type: "wx_snapshootsend_image",
            value: "图片中间页发送"
        },
        snapshootSendmore: {
            type: "wx_snapshootsend_more",
            value: "多文件中间页发送"
        },
        snapshootSendsingle: {
            type: "wx_snapshootsend_single",
            value: "单文件中间页发送"
        },
        snapshootSendempty: {
            type: "wx_snapshootsend_empty",
            value: "空文件中间页发送"
        },
        snapshootSendSuccessvideo: {
            type: "wx_snapshootsendsuccess_video",
            value: "视频中间页发送成功"
        },
        snapshootSendSuccessimage: {
            type: "wx_snapshootsendsuccess_image",
            value: "图片中间页发送成功"
        },
        snapshootSendSuccessmore: {
            type: "wx_snapshootsendsuccess_more",
            value: "多文件中间页发送成功"
        },
        snapshootSendSuccesssingle: {
            type: "wx_snapshootsendsuccess_single",
            value: "单文件中间页发送成功"
        },
        snapshootSendSuccessempty: {
            type: "wx_snapshootsendsuccess_empty",
            value: "空文件中间页发送成功"
        },
        singleShareShow: {
            type: "single_share_show",
            value: "文件分享中间页展示的次数和用户数"
        },
        batchShareShow: {
            type: "batch_share_show",
            value: "批选文件分享按钮点击后，中间页展示的用户数和次数"
        },
        singleSharBtnClick: {
            type: "single_share_btn_click",
            value: "文件分享中间页，发送至好友或群点击的用户数和次数"
        },
        batchSharBtnClick: {
            type: "batch_share_btn_click",
            value: "批选文件分享按钮点击后，文件分享中间页，发送至好友或群点击的用户数和次数"
        },
        singleSharBtnSucc: {
            type: "single_share_btn_succ",
            value: "文件分享中间页，发送至好友或群点击后分享成功的用户数和次数"
        },
        batchSharBtnSucc: {
            type: "batch_share_btn_succ",
            value: "批选文件分享中间页，发送至好友或群点击后分享成功的用户数和次数"
        }
    },
    guide: {
        guide: {
            type: "wx_guide_account",
            value: "游客账号单独报活"
        },
        shareNormal: {
            type: "wx_guide_share_normal",
            value: "共享文件tab立即绑定按钮点击的次数和用户数"
        },
        myNormal: {
            type: "wx_guide_my_normal",
            value: "我的tab立即绑定按钮点击的次数和用户数"
        },
        diskNormal: {
            type: "wx_guide_disk_normal",
            value: "网盘文件tab登录百度网盘按钮点击的次数和用户数"
        },
        accountNormal: {
            type: "wx_guide_bindAccount_normal",
            value: "上传进入绑定流程中间页点击立即绑定的用户数和次数"
        },
        dirNormal: {
            type: "wx_guide_share_dir_normal",
            value: "共享文件tab 点击文件夹进入文件夹内 立即绑定按钮点击的次数和用户数"
        },
        normalSuccess: {
            type: "wx_guide_normal_success",
            value: "游客正常化成功的次数和用户数"
        },
        addDir: {
            type: "wx_guid_add_click",
            value: "游客账号上传按钮点击的上传的用户数和次数"
        },
        dirdetialSet: {
            type: "wx_guide_dirdetial_set",
            value: "游客账号文件夹详情页 选择按钮点击的用户数和次数"
        },
        dirdetialAdd: {
            type: "wx_guide_dirdetial_set_add",
            value: "游客账号文件夹详情页 设置按钮点击后 设置页内添加共享成员按钮点击 的用户数和次数"
        },
        shareSuccess: {
            type: "wx_guid_share_success",
            value: "游客账号 添加共享成员点击后发送成功的的用户数和次数"
        },
        gridItem: {
            type: "wx_guide_grid",
            value: "游客账号文件夹详情页切换视频按钮点击的用户数和次数"
        },
        addIcon: {
            type: "wx_guide_add_icon",
            value: "游客账号文件夹详情页 +点击 的用户数和次数"
        },
        more: {
            type: "wx_guide_more",
            value: "游客账号文件夹外侧 更多按钮内 添加共享成员点击 的用户数和次数 "
        }
    },
    sharepage: {
        index: {
            type: "wx_sharepage_index",
            value: "打开外链分享页"
        },
        guiderIndex: {
            type: "wx_sharepage_guider_index",
            value: "游客打开外链分享页"
        },
        transfer: {
            type: "wx_sharepage_transfer_click",
            value: "外链分享,保存到我的网盘点击"
        },
        transGuider: {
            type: "wx_sharepage_transfer_guider_click",
            value: "外链分享,游客帐号保存到我的网盘点击"
        },
        transBindAcc: {
            type: "wx_sharepage_transfer_bind_account",
            value: "外链分享保存到我的网盘点击后 绑定账号成功"
        },
        userhead: {
            type: "wx_sharepage_userhead_click",
            value: "外链分享,右上角头像icon点击"
        },
        expired: {
            type: "wx_sharepage_expired",
            value: "外链分享，分享链接已过期"
        },
        delShare: {
            type: "wx_sharepage_delete",
            value: "外链分享，分享文件被分享者删除"
        },
        remindIt: {
            type: "wx_sharepage_error_remind_click",
            value: "外链错误页面，提醒TA点击"
        },
        remindItShow: {
            type: "wx_sharepage_error_remind_show",
            value: "外链错误页面，提醒TA展示"
        },
        rejectShare: {
            type: "wx_sharepage_reject",
            value: "外链分享，命中反作弊策略"
        },
        guideJoin: {
            type: "wx_sharepage_guideJoin",
            value: "游客账号加入共享目录成功的用户数和次数"
        },
        video: {
            type: "wx_na_video",
            value: "app分享卡片打开后进入小程序预览视频使用APP播放点击次数"
        },
        videoFail: {
            type: "wx_na_video_fail",
            value: "app分享卡片打开后进入小程序预览视频使用APP播放点击失败次数"
        },
        audio: {
            type: "wx_na_audio",
            value: "app分享卡片打开后进入小程序预览音频使用APP播放成功次数"
        },
        audioFail: {
            type: "wx_na_audio_fail",
            value: "app分享卡片打开后进入小程序预览音频使用APP播放点击失败次数"
        },
        doc: {
            type: "wx_na_doc",
            value: "app分享卡片打开后进入小程序预览文档使用APP播放成功次数"
        },
        docFail: {
            type: "wx_na_doc_fail",
            value: "app分享卡片打开后进入小程序预览文档使用APP播放点击失败次数"
        },
        transNormal: {
            type: "wx_sharepage_transfer_normal_click",
            value: "游客正常化后,再次点击转存按钮的用户数和次数"
        },
        share: {
            type: "wx_sharepage_share",
            value: "app分享卡片打开进入小程序后再次分享"
        },
        report: {
            type: "wx_sharepage_report",
            value: "外链页举报按钮"
        },
        reportCopyLink: {
            type: "wx_sharepage_reportCopyLink",
            value: "外链页举报页面复制链接按钮"
        },
        shareToFriend: {
            type: "wx_sharepage_shareToFriend",
            value: "外链页发送给朋友按钮"
        },
        shareToFriendTransfered: {
            type: "wx_sharepage_shareToFriend_transfered",
            value: "转存成功后点击分享至好友"
        },
        toView: {
            type: "wx_sharepage_toView",
            value: "外链页点击查看"
        },
        singeImageShare: {
            type: "wx_sharepage_singeImage_share",
            value: "单图外链页分享"
        },
        singeImageDownload: {
            type: "wx_sharepage_singeImage_download",
            value: "单图外链页下载"
        },
        singeImageTransfer: {
            type: "wx_sharepage_singeImage_transfer",
            value: "单图外链页转存"
        },
        storyImageShare: {
            type: "wx_sharepage_storyImage_share",
            value: "故事外链页预览分享"
        },
        storyImageDownload: {
            type: "wx_sharepage_storyImage_download",
            value: "故事外链页预览下载"
        },
        storyImageTransfer: {
            type: "wx_sharepage_storyImage_transfer",
            value: "故事外链页预览转存"
        },
        storyImagePreview: {
            type: "wx_sharepage_storyImage_preview",
            value: "故事外链页预览展示"
        },
        previewImageShare: {
            type: "wx_sharepage_previewImage_share",
            value: "外链页多图预览分享"
        },
        storyOpen: {
            type: "wx_sharepage_story",
            value: "故事外链页落地次数"
        },
        storySave: {
            type: "wx_sharepage_storySave",
            value: "故事外链页转存点击"
        },
        storyShare: {
            type: "wx_sharepage_storyShare",
            value: "用户故事分享"
        }
    },
    activity: {
        card: {
            type: "wx_act_card",
            value: "微信小程序卡片点击"
        },
        iconShow: {
            type: "wx_icon_show",
            value: "小程序角标展示"
        },
        iconClick: {
            type: "wx_icon_click",
            value: "小程序角标点击"
        },
        iconCancel: {
            type: "wx_icon_cancel",
            value: "小程序角标取消"
        },
        centerShow: {
            type: "wx_center_show",
            value: "小程序中间页展现"
        },
        centerClick: {
            type: "wx_center_click",
            value: "小程序中间页按钮点击"
        },
        actNormal: {
            type: "wx_act_normal",
            value: "触发正常化用户数"
        },
        imgShow: {
            type: "wx_img_activity_show",
            value: "小程序图片运营位展示"
        },
        shareFeedShow: {
            type: "wx_share_feed_show",
            value: "小程序外链Feed展示"
        },
        shareFeedClose: {
            type: "wx_share_feed_close",
            value: "小程序外链Feed关闭"
        }
    },
    extractCode: {
        obtainBtn: {
            type: "wx_extractCode_obtain",
            value: "提取文件按钮点击"
        },
        verifyCode: {
            type: "wx_extractCode_verifyCode",
            value: "获取验证码数"
        }
    },
    transAssistant: {
        myCollectionShow: {
            type: "wx_my_collection_page_show",
            value: "[我收集的]列表页展示"
        },
        myCollectionEmpty: {
            type: "wx_my_collection_page_empty",
            value: "[我收集的]列表为空"
        },
        myCollectionShareBtn: {
            type: "wx_my_collection_share_btn_click",
            value: "[我收集的]再次分享按钮点击"
        },
        myCollectionDetailShow: {
            type: "wx_my_collection_detail_page_show",
            value: "[我收集的-文件夹详情]页面展示"
        },
        myCollectionDetailSaveBtn: {
            type: "wx_my_collection_detail_save_btn_click",
            value: "[我收集的-文件夹详情]文件保存按钮点击"
        },
        myCollectionDetailSaveSuccess: {
            type: "wx_my_collection_detail_save_success",
            value: "[我收集的-文件夹详情]文件保存成功"
        },
        show: {
            type: "wx_transAssistant_show",
            value: "传输助手介绍页展示"
        },
        checkFail: {
            type: "wx_transAssistant_check_fail",
            value: "传输助手介绍页加载失败"
        },
        refresh: {
            type: "wx_transAssistant_refresh",
            value: "传输助手刷新点击"
        },
        select: {
            type: "wx_transAssistant_select",
            value: "传输助手选择文件点击"
        },
        selectPage: {
            type: "wx_transAssistant_select_page",
            value: "传输助手选择文件页展现"
        },
        selectPageFail: {
            type: "wx_transAssistant_select_page_fail",
            value: "传输助手选择文件页加载失败"
        },
        selectAll: {
            type: "wx_transAssistant_select_all",
            value: "传输助手全选点击"
        },
        send: {
            type: "wx_transAssistant_send",
            value: "传输助手提交点击"
        },
        sendFail: {
            type: "wx_transAssistant_send_fail",
            value: "传输助手提交失败"
        },
        sendSuccess: {
            type: "wx_transAssistant_send_success",
            value: "传输助手提交成功"
        },
        successPage: {
            type: "wx_transAssistant_success_page",
            value: "传输助手提交成功页"
        },
        successSelect: {
            type: "wx_transAssistant_success_page_select",
            value: "传输助手提交成功页选择点击"
        },
        successHome: {
            type: "wx_transAssistant_success_page_home",
            value: "传输助手提交成功页返回首页点击"
        },
        sendLocalFile: {
            type: "wx_send_local_file",
            value: "点击发送本地文件"
        },
        sendImgFile: {
            type: "wx_send_img_file",
            value: "点击本地照片"
        },
        sendVideoFile: {
            type: "wx_send_video_file",
            value: "点击上传视频"
        },
        sendWxFile: {
            type: "wx_send_wx_file",
            value: "点击微信文件"
        },
        localUpload: {
            type: "wx_transAssistant_local_upload",
            value: "本地上传文件"
        },
        localRetry: {
            type: "wx_transAssistant_local_retry",
            value: "本地上传文件重试"
        },
        localAllSuccess: {
            type: "wx_transAssistant_local_all_success",
            value: "本地上传上传成功发送成功"
        },
        localAllFail: {
            type: "wx_transAssistant_local_all_fail",
            value: "本地上传上传失败"
        },
        uploadSuccessSendFail: {
            type: "wx_transAssistant_local_uploadSuccessSendFail",
            value: "本地上传上传成功发送失败"
        },
        partSuccessSendSuccess: {
            type: "wx_transAssistant_local_partSuccessSendSuccess",
            value: "本地上传部分上传成功发送成功"
        },
        partSuccessSendFail: {
            type: "wx_transAssistant_local_partSuccessSendFail",
            value: "本地上传部分上传成功发送失败"
        },
        entry: {
            type: "wx_transAssistant_entry",
            value: "传输助手入口icon点击"
        },
        sendDetail: {
            type: "wx_transAssistant_send_detail",
            value: "我发出的文件夹详情页展示"
        },
        showCreate: {
            type: "wx_transAssistant_show_create",
            value: "新建收集按钮点击"
        },
        createShow: {
            type: "wx_transAssistant_create_show",
            value: "新建收集浮窗展示"
        },
        create: {
            type: "wx_transAssistant_create_btn",
            value: "确认新建收集按钮点击"
        },
        createLimit: {
            type: "wx_transAssistant_create_limit",
            value: "新建收集人数"
        },
        createDefaultLimit: {
            type: "wx_transAssistant_create_default_limit",
            value: "新建收集默认人数"
        },
        createPeriod: {
            type: "wx_transAssistant_create_period",
            value: "新建收集天数"
        },
        createDefaultPeriod: {
            type: "wx_transAssistant_create_default_period",
            value: "新建收集默认天数"
        },
        createSuccess: {
            type: "wx_transAssistant_create_success",
            value: "新建收集成功"
        },
        hideCreate: {
            type: "wx_transAssistant_hide_create",
            value: "新建收集浮窗关闭"
        },
        share: {
            type: "wx_transAssistant_share",
            value: "创建成功中间页展示"
        },
        shareMoments: {
            type: "wx_transAssistant_share_moments",
            value: "发送至朋友圈按钮点击"
        },
        shareFriends: {
            type: "wx_transAssistant_share_friends",
            value: "发送至好友按钮点击"
        },
        poster: {
            type: "wx_transAssistant_poster",
            value: "发送至朋友圈生成二维码页展示"
        },
        helpShow: {
            type: "wx_transAssistant_help_show",
            value: "这是什么功能展示"
        },
        helpClick: {
            type: "wx_transAssistant_help_click",
            value: "这是什么功能点击"
        },
        sendList: {
            type: "wx_transAssistant_send_list_show",
            value: "我发出的列表"
        },
        sendListEmpty: {
            type: "wx_transAssistant_send_list_empty",
            value: "我发出的列表为空"
        }
    },
    pcReport: {
        pcReportUser: {
            type: "wx_pcReportUser",
            value: "pc端使用小程序"
        },
        pcReportBtnClick: {
            type: "wx_pcReportBtnClick",
            value: "pc端不支持预览弹窗，点击【我知道了】按钮"
        }
    },
    transferOptimization: {
        tipPopupClose: {
            type: "wx_transferOptimization_tipPopupClose",
            value: "底部已保存至我的资源页面弹框，关闭按钮点击次数"
        },
        consumeFile: {
            type: "wx_transferOptimization_consumeFile",
            value: "消费文件上报"
        },
        dwellTime: {
            type: "wx_transferOptimization_myResource",
            value: "用户在我的资源根目录下停留时间"
        }
    }
}, t = wx.log = {
    register: function(a) {
        Object.keys(a).forEach(function(s) {
            var l = a[s], _ = t[s] = {};
            Object.keys(l).forEach(function(a) {
                _[a] = {
                    send: function(t) {
                        (0, e.reportAction)(Object.assign({}, l[a], t));
                    }
                };
            });
        });
    },
    send: function(a) {
        return (0, e.reportAction)(a);
    }
};

t.register(a);

var s = wx.logBp = {
    register: function(a) {
        Object.keys(a).forEach(function(t) {
            var l = a[t], _ = s[t] = {};
            Object.keys(l).forEach(function(a) {
                _[a] = {
                    send: function(t) {
                        (0, e.reportActionBp)(Object.assign({}, l[a], t));
                    }
                };
            });
        });
    },
    send: function(a) {
        return (0, e.reportActionBp)(a);
    }
};

s.register(a);