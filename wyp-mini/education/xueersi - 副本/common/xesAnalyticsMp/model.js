var Model = {
    baseModel: {
        os: "",
        os_vers: "",
        model: "",
        manufacturer: "",
        screen_size: "",
        sdk_ver: "v1.0.0",
        app_ver: "",
        up_time: ""
    },
    dataPropsModel: {
        trace_id: "",
        accs_time: "",
        serv_time: "",
        proj_id: "",
        source: "11",
        event_type: "",
        event_id: "",
        seq_id: 0,
        session_id: 0
    },
    propertiesModel: {
        $province: "",
        $city: "",
        ip: "",
        longitude: "",
        latitude: "",
        netwk_typ: "",
        wifi_address: "",
        wifi_name: "",
        wifi_signal: ""
    },
    busPropsModel: {
        page_id: "",
        refer_id: "",
        duration: "",
        from_id: "",
        wechat_ver: ""
    },
    usrPropsModel: {
        gid: "",
        user_id: "",
        user_role: "1",
        city: "",
        city_code: "",
        city_id: "",
        union_id: "",
        app_id: "",
        open_id: "",
        grade: "",
        grade_id: ""
    },
    getFullMessage: function() {}
};

module.exports = Model;