module.exports = {
    WeToast: function() {
        function A() {
            var A = getCurrentPages(), e = A[A.length - 1];
            return this.__page = e, this.__timeout = null, this.__iconlist = t, e.wetoast = this, 
            this;
        }
        var t = {
            success: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACeklEQVR4nO2b25GjMBBFJwSH4BAIYTMYMhhnMJPBTgbrDCCEzcDOwGSAMzn7IVHlYsRaSN1qUeZU+c80fa/1aFr47W1nZ2dHGeAAvAO/gQ64LHw6/5134GCddxZAA/wBbqRz8zEaaz3RAB+Zov9nxoe1vkW88FFB+JyxKiNwQ/1SQPicC9ZTA/g0ED7n00L4Abdi10JHqV0DJ15jkcvlhrYJ1Ct+Qs8E6hc/oWMCdc35Z3TS4r+sFSXwJSW+sVaSQX6dgE2RI8UlV/zJWoEApxwDRuvsBRhf+defWD8K2MaeH8ttrfgtr/xLHNcYcLbOVoHz1of/X1w5fgD6hOvjpoG/QW30Qjk+f0YAWsHEJegDOaYa0MYY8C2YfC4/xPscu8R43zEGpMwvDaTFL8ac3+Aqk38Wg4J4gOsWDBgILFbI9COqN0BTPCgbMOB2kAa3Z6dcrykelA1oZ3HWLKYlxIOyAb8CsWJMKCUeIg1I3QaD3Zcn8UqKh8htMKcQCnZjCZtQWjxEFkK5pfCSCY9Ty0I8RJbCEg9DP0zwcQfsxBO675IJg8DNlkywEh+sLpcMkGqIPD2hodyJ06qGiGRLbNEEyp44HaMN8MlJTIOJ0HQo2XWOH/6KCXYPsUu/WXJabYBP9C6cyEj5w5Z7knilUWBB2q//YIJ1fyCHa5Z4b8CWD0lkXqPjlV+QeDChlmZpDL2oeG/AVMvXTvBZ41VM0BO/ARP0xc9MqGlN6LH4gwV17A6yq32CCQ02xdIV69flH8GVzdLPDiHu5Ja3mngjNBbJoWrhc3BT45xpxuBjHK31ZIHbNVpcy73Hzd/Qp/ffadn63+Z2dnY2wT8HBwbYD9r5ZwAAAABJRU5ErkJggg==",
            error: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACuklEQVR4nO2b23HCMBQFU4JLoYR0EDoJHYQOoAPTQdIBdIA7sDuwO9h8SJ44+CXp6sXg/cpMGMlnka5sCb+9bWxsbAQG2AGfQAlcgZoxtf7fSX92l/q6RQAfwDfQToQ1pdVtfKTOYwRQAF/C0EsyvoAidc4RgYPnLQLYMz2nQ1MD+9ThTwmCP3JKEbwA7qmTD7gTa0qglrQ6bd5J7oReOlHhYxQ6V1pCSUAN+zptPiPCTAfymvNr3H2HP6dO5MDZV/h96iQC3qXhn2Xez1EjqQfAMXEAHxwl337OS54pLS6jAPdv/4KSV+i/pVSo+48dcHNsw34U4P7tFw/tSCRUw/ZQUl1obcNLKv9ouOEm4V94oQCweXIEfgQdfc+0aSPhwrTIUnBdFxsB0uJXCiRMXiiy8GA6DVDFxgcuEkKF71l/UAIOnjoDOwmhwwMcTAT4WLqGmEiIER5Mng9wX2uXWJIQKzzAzURAHaBjmJEQMTxAbdJ5SFYlEC48AKkFwIIEAoeHPARcFvr2XYBHpBYwGz6WBBMBTaC+V8NHkNCYdB5iGZwMj5rzkttmW24p7C+F74klwehGyOetsEn4nhgSjG6FfT0M2YTvCS3B7NQI6IQduYTvCSWhMwqvO5NsiIzCo3ZyrhZtzEnwel1LArxtieF+lD6SQKwtMd2Z6zR43MSUnCmWD9fkKsB8+A86c90Wv/K3je3jQLXkb5u9dGzj6CKgQF4Mc6DD9XiMVz4aG4yCUM8GMWiQ/liCVz4eH0h43R9IDCRUqRNZUHkNrwU8Sz0YnSn6lLAj76WxI9JvBXOcDhWx3jFATYecJIQb9isiclgd/FZ7Bwl70hTHBl/rvBTUlDgSp0B2uq88XpgYElhEvsGnQE2NH6GMDrUVlvbNECmopfOAKpo3pmtGo/931p997tfmNjY2noJf5zQJ78WIYTwAAAAASUVORK5CYII=",
            warning: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACPklEQVR4nO2b23HqMBRFU4JLoAQ6CR2EDpIOoINLB7gTuwPcAXSy8iFl8PiSICzvc0SiNeM/Bp290MuyeXmpVCoVMUADvAI74Ah031zH+JlXoPGuOwtgDfwDTsznFL9j7Z0nGeAtM/RPMt68831LDH4WBJ9yLkoEoat3BsGndHgPDeDdIfiUd4/gDWHGLoUjVqsGIbxiksvlhFoC5Yb/QieB8sN/oZFAWWP+Hselw394J5rBx1Lh16oCgVW89qI28vcJaDY5//06aCR0ueG3gqLgxiRF6AkKtjkCzqKiLAWc54ZX/foA+xvtqeYBmNML0K/5O66T4E7c1unR8KqZ35PVIwIO3tUKOJTU/T1IGwaEPf9v5f49ArAxKqbnOgn2Rm1uUgQol6Mxq1Gbqj3AlH2KgNaikhvtWtCmCDDpjk4C+iqgCqgCqoAq4I6AP78MmmyEnATsUwSYbIWdBCRthU1uhpwEpD0wAQZ1JQ4ChqTwsRj5gYiDgIcORORHYg4CVskCYkHSYWAsIL37jwpSHotbC9g+LCAWdVFVZCjgMit8LErWCwwFbGcLiIWp7g2aURuqI7E+K3wsTrUidFwPRTtRG8u8RsdffkFiJMHkLnEh2kXDRwENBlvkBRgQvylWsgRd+CeQoA8/kVDSnNDi8QcLylgdlp3tZ0hYY/dwc0yP9+vyYwjbZtm9w4gLudtbJVGEYpIcig4+hTA0DpkyhvgdK+88WRBWjQ3hyL0ljN9bVxs/s+HZ/zZXqVSegk/11GYS3DSzNQAAAABJRU5ErkJggg==",
            agree: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABy0lEQVR4nO2bYZHCMBBGkYCESjgJkYCDQwISKgEH4AAcUAd3DhoH4ODdj8Bcr8eQpAlNu9s3w6/MdvZ7hIRp09VqYWFhoSDAJ3DhlxY4AFXp3t4OcOI1B2Bdus+3AOw84R98iZMArIFroACAU+meswJsI8I/MKX7zgbQDBBwKd13FnDTfyjzXwuATYKATen+kwH2CQLq0v0ng9vWdAog7fcvQsCQ7U+UgKN2ATH//mQJIH36z1cAbvFrMwgwpbMMgrStr0tVOksUuG/+kin8rXSeKABDnmn/4Fw6UxD34L47PUPYjhmgvX/Mi/E5cCJ24QRs5wLtk/HUvbwEhxgBf/CNz4gwCf0qQQIg5H5Cv0KYAP9O0q8QJuCqXcC/PNoEWO0CGu0C1C+CtXYBO+0CjHYBlWoB3vDCBVjtAhrtAvbaBfi3QOECjHYBlWoBQeEFC2i0CzhqFxC2AwgWYLQLCD9f2K8UIMAGhxcqIO6pcr9agIA6VsCtU2w943PAxAowuCfE9lkx7qzvXCSMf6oEJyj1PGAujqML6IhY416LsZ4m38U3UzleD3zgTomPIeMG1JMJ3weocDNjj3tzJIcUC5zv151m8IWFhUnyA7/OAVjTIzoeAAAAAElFTkSuQmCC",
            start: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACQUlEQVR4nO2b23HCMBREKSElUAId4A5CB3EHSQemg6SDuIOkA9xB0gF0AB2cfEiaMAkGyXos9vjM8It298q6lhCLxczMzIwAoAaO9rNR6ykK8GCNO47Ag1pXMYAt/6nVuorxp/qOvVpXEeyz30et1pcdYH8lgGnPghvVd1Rqndm4UX3HTq0zC0DlYX66swDYBQTwqdablMDqO5Zq3ckIrL6jVetOArAcYH46swBoIwJ4U+uPIrL6MPZNUmT1HVu1j0EQX33HOGaBNbwGnoEG+EoUAJgu0gBPwFptdG2FNMAHw1pcCvZ27FdM6GtSdQ1+q9kA73agS3v4e2WHKU4DPBIya4AXofCc+J09qlVmpvMJ4KBWmZHbmyxgBZzUSjNwAlY+y8AUQ/A3fxaCz/HVGAg3P6EQhpufQAjx5kceQp3E/EhDSGt+ZCHkMT+SEPKav/MQypi/0xDKmj8LIcWRVywa83cSgta8DWAjDCDNi05kAJeuu5SiUvtfAJ/CALZq/wvSnv6G0qr9q4/QOrX5lTgA1AEoO4BjqQxA2QEclTIAZQdwvCgDUHYAh+4Ogdq5pVOZT9EBWqCL/I6jKoCYDtBxtnpjbpHF/CJV/v4AwzpAx5VVG3PGMOQHmd7vzAZhHeCA59YV82eKbWAQ5TsBfh3gxMANC+aOgu9Zw6AxovARRYJnE7PY3loouwSWgkX10ZLh9RSzUH73jFn2fwZcvgF2dYFLOHbN/45xyD1un5CTrUpVeOzzhfJQevyZmZnp8APlvAG8KU5n5QAAAABJRU5ErkJggg==",
            loading: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD9ElEQVR4nO2b23HqMBCGUwIluISU4BLSQegg6QB3kHRw6CDpAHcAHZgO7A6+8yB7ALErr4wsM4F/huEBXXZ/SXvRipeXhQBUQNN/NkvJsQh65X1US8uVDcBRIGC/tFzZICgPwNJyRQMo+zNM//1q7DeZAOBtypzJARSCDi1QGPpOIiAw5yqJUjFANmQAP4a+Uwmola5vabSKALDWFAHKkb7RBOC2voZFCFgBnSJQ0KJPJEDyHABdWs0iAHwGVmUd6BdFAPpxC86TBYGVUY1TDAG4ndYqXepZlbMA5wo1VEqfGAK2gfHLOXUzA906g+AWrQQAr4Fxtzl0MwHZPw/YCe2tBGjEdhKxqRX6AN4xBhnAd4CE0msreY+j1ybkZiujTKtehw8zYVz72xZ4N05mcovAr9Bm67XRjOsRw6LgPNS58Wyx2IzAxPuxAQismteuAA5nP9e+Uto4jAQ9XOYnVzpYCBjDPwLbyVNswFFpW2hjIe+mOjBvAfyMCW8hQNsB52iBDcJWxFluX/joUJXr3dQhZH64o7cxyAzKQvgDloICGhoE+4Bbjar/lLHKe7IM4xTC72v0IMmHSKA2cUHYt/vYmQdPANwu20fI98sUt4lbAcuRgEx5OW5xrKt+IEW0iHMplmPxebuKo7KEEqMBHamTJJyxCcXlkOFm10DAN3PuRNz50+zD7HYAPfmqmTM8FgR542Qf0m+58NxrTkcyzTl/4okHBqdCZQxaXF6Q/07+JPcKF/9b44IBDUNBFptfDeHqwiMjAVLiFYNKy7piUSygfOi6zIr9oxNwSHEE6tzKn5Fw+xHoB6qwJz0DOlxovLQR3BK/i4880oOMJ56YAVy+1GjJnwwNwU9DzmQI5352inFZMh3eMXO1aIULfUOoZhPgJMeY2/4itWfiusqi4V6uxEzVLMtkoSqLjy4587JMBXa/P1rNCk2yM04C7joq97V4TBT4Q2Rx1JpeHhGsP47ATf8pb1C0PBvnSgEur8bG0GJZJGwhcYc7i1ppzCdwPUF5vzQmKoAzztZ8prFMPIYt8cVRceKeLHEs5JVV7x5wu04qu1/AQoC2A0ZvX4krj5+XtnakLY+rOlgI8B9ImK68Cb/mOnhtb3kg0fhkKfL41awOqz3CrdAnbkVzPZFpvDbqbiLuicy616UwKT8FhB9J1UJ7EUI7rQJlepSdDQFBkQSNIOD+n8nx6A8lCTxiJt1TWS3YWexKfhDucR9LE+H2hL5RBPR9tJ3WptXMCJ5/mFC35a+hbzQBfT/N2yxCgOT7TY+YbyBAm3OZ2gSXcfeRfH+bi57zrnALAX8CyBZ9PFP7K0A2oLNfqN4VOBVkFy1U/geJ6sdf0+0fBQAAAABJRU5ErkJggg=="
        };
        return A.prototype.toast = function(A) {
            try {
                A ? this.show(A) : this.hide();
            } catch (t) {
                console.log(t), A && "function" == typeof A.fail && A.fail(A);
            } finally {
                A && "function" == typeof A.complete && A.complete(A);
            }
        }, A.prototype.show = function(A) {
            var t = this, e = this.__page, o = this.__iconlist;
            clearTimeout(this.__timeout), e.setData({
                "__wetoast__.reveal": !0
            }), setTimeout(function() {
                var t = wx.createAnimation();
                t.opacity(1).step(), A.animationData = t.export(), A.reveal = !0, A.icon && o[A.icon] && (A.img = o[A.icon]), 
                e.setData({
                    __wetoast__: A
                });
            }, 30), 0 === A.duration ? setTimeout(function() {
                "function" == typeof A.success && A.success(A);
            }, 430) : this.__timeout = setTimeout(function() {
                t.toast(), "function" == typeof A.success && A.success(A);
            }, (A.duration || 1500) + 400);
        }, A.prototype.hide = function() {
            var A = this.__page;
            if (clearTimeout(this.__timeout), A.data.__wetoast__.reveal) {
                var t = wx.createAnimation();
                t.opacity(0).step(), A.setData({
                    "__wetoast__.animationData": t.export()
                }), setTimeout(function() {
                    A.setData({
                        __wetoast__: {
                            reveal: !1
                        }
                    });
                }, 400);
            }
        }, new A();
    }
};