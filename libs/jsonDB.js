var jsonDB = {}


jsonDB.maintainModule = {
    itemsMap: null,
    items: null,
    getItem: function (id) {
        debugger
        if (!this.itemsMap)
            this.refresh();
        return this.itemsMap[id + '']
    },
    getItems: function () {
        if (!this.items || this.items.length == 0) {
            this.refresh();
        }
        return this.items;
    },
    refresh: function () {
        debugger
        var _this = this;
        $.ajax({
            url: "/usedcartrade/m/chexing/chexings",
            method: "post",
            data: {ps: 1000},
            async: false,
            success: function (data) {
                if (data.code != 0) {
                    return;
                }
                var items = data.data.items;
                var itemsMap = {}
                for (var ii in items) {
                    var aaa = items[ii]
                    itemsMap[aaa.chexingId + ''] = aaa
                }
                _this.items = items;
                _this.itemsMap = itemsMap;
            }
        });
    }
};


jsonDB.brand = {
    itemsMap: null,
    items: null,
    getItem: function (id) {
        debugger
        if (!this.itemsMap)
            this.refresh();
        return this.itemsMap[id + '']
    },
    getItems: function () {
        if (!this.items || this.items.length == 0) {
            this.refresh();
        }
        return this.items;
    },
    refresh: function () {
        debugger
        var _this = this;
        $.ajax({
            url: "/usedcartrade/m/brand/brands",
            method: "post",
            data: {ps: 1000},
            async: false,
            success: function (data) {
                if (data.code != 0) {
                    return;
                }
                var items = data.data.items;
                var itemsMap = {}
                for (var ii in items) {
                    var aaa = items[ii]
                    itemsMap[aaa.brandId + ''] = aaa
                }
                _this.items = items;
                _this.itemsMap = itemsMap;
            }
        });
    }
};



jsonDB.carBrandSeries = {
    brandItemsMap: {},
    itemsMap: null,
    getItem: function (id) {
        debugger
        if (!this.itemsMap)
            this.refresh();
        return this.itemsMap[id + '']
    },
    getItems: function (brandId) {
        if(!brandId)
            return;
        if(!this.brandItemsMap[brandId])
            this.refresh(brandId);
        return this.brandItemsMap[brandId];
    },
    refresh: function (brandId) {
        debugger
        var _this = this;
        $.ajax({
            url: "/usedcartrade/m/carseries/serieses",
            method: "post",
            data: {ps: 1000,brandId:brandId},
            async: false,
            success: function (data) {
                if (data.code != 0) {
                    return;
                }
                var items = data.data.items;
                var itemsMap = {}
                for (var ii in items) {
                    var aaa = items[ii]
                    itemsMap[aaa.seriesId + ''] = aaa
                }
                _this.itemsMap = itemsMap;
             _this.brandItemsMap[brandId]=items
            }
        });
    }
};


jsonDB.carSeriesAll = {
    itemsMap: null,
    items: null,
    getItem: function (id) {
        debugger
        if (!this.itemsMap)
            this.refresh();
        return this.itemsMap[id + '']
    },
    getItems: function () {
        if (!this.items || this.items.length == 0) {
            this.refresh();
        }
        return this.items;
    },
    refresh: function () {
        debugger
        var _this = this;
        $.ajax({
            url: "/usedcartrade/m/carseries/serieses",
            method: "post",
            data: {ps: 1000},
            async: false,
            success: function (data) {
                if (data.code != 0) {
                    return;
                }
                var items = data.data.items;
                var itemsMap = {}
                for (var ii in items) {
                    var aaa = items[ii]
                    itemsMap[aaa.seriesId + ''] = aaa
                }
                _this.items = items;
                _this.itemsMap = itemsMap;
            }
        });
    }
};

jsonDB.carDriveMode = {
    itemsMap: null,
    items: null,
    getItem: function (id) {
        debugger
        if (!this.itemsMap)
            this.refresh();
        return this.itemsMap[id + '']
    },
    getItems: function () {
        if (!this.items || this.items.length == 0) {
            this.refresh();
        }
        return this.items;
    },
    refresh: function () {
        debugger
        var _this = this;
        $.ajax({
            url: "/usedcartrade/m/cardrivemode/items",
            method: "post",
            data: {ps: 1000},
            async: false,
            success: function (data) {
                if (data.code != 0) {
                    return;
                }
                var items = data.data.items;
                var itemsMap = {}
                for (var ii in items) {
                    var aaa = items[ii]
                    itemsMap[aaa.itemId + ''] = aaa
                }
                _this.items = items;
                _this.itemsMap = itemsMap;
            }
        });
    }
};


jsonDB.articleColumn = {
    itemsMap: null,
    items: null,
    getItem: function (id) {
        debugger
        if (!this.itemsMap)
            this.refresh();
        return this.itemsMap[id + '']
    },
    getItems: function () {
        if (!this.items || this.items.length == 0) {
            this.refresh();
        }
        return this.items;
    },
    refresh: function () {
        debugger
        var _this = this;
        $.ajax({
            url: "/usedcartrade/c/oth/articlecolumns",
            method: "post",
            data: {ps: 1000},
            async: false,
            success: function (data) {
                if (data.code != 0) {
                    return;
                }
                var items = data.data.items;
                var itemsMap = {}
                for (var ii in items) {
                    var aaa = items[ii]
                    itemsMap[aaa.columnId + ''] = aaa
                }
                _this.items = items;
                _this.itemsMap = itemsMap;
            }
        });
    }
};


jsonDB.apiType = {
    itemsMap: null,
    items: [],
    getItem: function (id) {
        debugger
        if (!this.itemsMap)
            this.refresh();
        return this.itemsMap[id + '']
    },
    getItems: function () {
        if (!this.items || this.items.length == 0) {
            this.refresh();
        }
        return this.items;
    },
    refresh: function () {
        debugger
        var _this = this;
        var items = [{apiTypeId: '0', name: '公共'}, {apiTypeId: '1', name: '运维端'}, {apiTypeId: '2', name: '用户端'},]

        var itemsMap = {}
        for (var ii in items) {
            var aaa = items[ii]
            itemsMap[aaa.columnId + ''] = aaa
        }
        _this.items = items;
        _this.itemsMap = itemsMap;
    }


}
;



jsonDB.carStatus = {
    itemsMap: null,
    items: [],
    getItem: function (id) {
        debugger
        if (!this.itemsMap)
            this.refresh();
        return this.itemsMap[id + '']
    },
    getItems: function () {
        if (!this.items || this.items.length == 0) {
            this.refresh();
        }
        return this.items;
    },
    refresh: function () {
        debugger
        var _this = this;
        var items = [{carStatusId: '0', name: '待售'}, {carStatusId: '1', name: '在售'}]

        var itemsMap = {}
        for (var ii in items) {
            var aaa = items[ii]
            itemsMap[aaa.carStatusId + ''] = aaa
        }
        _this.items = items;
        _this.itemsMap = itemsMap;
    }


}






jsonDB.area1 = {
    itemsMap: null,
    items: [],
    getItem: function (code) {
        debugger
        if (!this.itemsMap)
            this.refresh();
        return this.itemsMap[code + '']
    },
    getItems: function () {
        if (!this.items || this.items.length == 0) {
            this.refresh();
        }
        return this.items;
    },
    refresh: function () {
        debugger
        var _this = this;
        var items
         $.ajax({
             url:'/usedcartrade/area1.json',
             async:false,
             success:function(data){
                 items=data;
             }
         })

        var itemsMap = {}
        for (var ii in items) {
            var aaa = items[ii]
            itemsMap[aaa.code + ''] = aaa
        }
        _this.items = items;
        _this.itemsMap = itemsMap;
    }


}




jsonDB.area2 = {
    itemsMap: null,
    getItems: function (area1Code) {
        debugger
        if(!area1Code)
            return;
        if(!this.itemsMap)
            this.refresh();
        return this.itemsMap['code'+area1Code].children;
    },
    refresh: function () {
        debugger
        var _this = this;
        var itemsMap
        $.ajax({
            url:'/usedcartrade/area2.json',
            async:false,
            success:function(data){
                itemsMap=data;
            }
        })
    _this.itemsMap=itemsMap

    }
};