setInterval(function() {
    Math.random() > .75 && worker.postMessage({
        msg: "insertSayHi"
    });
}, 500);