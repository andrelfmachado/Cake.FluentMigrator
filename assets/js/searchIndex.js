
var camelCaseTokenizer = function (obj) {
    var previous = '';
    return obj.toString().trim().split(/[\s\-]+|(?=[A-Z])/).reduce(function(acc, cur) {
        var current = cur.toLowerCase();
        if(acc.length === 0) {
            previous = current;
            return acc.concat(current);
        }
        previous = previous.concat(current);
        return acc.concat([current, previous]);
    }, []);
}
lunr.tokenizer.registerFunction(camelCaseTokenizer, 'camelCaseTokenizer')
var searchModule = function() {
    var idMap = [];
    function y(e) { 
        idMap.push(e); 
    }
    var idx = lunr(function() {
        this.field('title', { boost: 10 });
        this.field('content');
        this.field('description', { boost: 5 });
        this.field('tags', { boost: 50 });
        this.ref('id');
        this.tokenizer(camelCaseTokenizer);

        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.remove(lunr.stemmer);
    });
    function a(e) { 
        idx.add(e); 
    }

    a({
        id:0,
        title:"FluentMigratorToolResolver",
        content:"FluentMigratorToolResolver",
        description:'',
        tags:''
    });

    a({
        id:1,
        title:"IFluentMigratorToolResolver",
        content:"IFluentMigratorToolResolver",
        description:'',
        tags:''
    });

    a({
        id:2,
        title:"FluentMigratorSettings",
        content:"FluentMigratorSettings",
        description:'',
        tags:''
    });

    a({
        id:3,
        title:"FluentMigratorRunner",
        content:"FluentMigratorRunner",
        description:'',
        tags:''
    });

    a({
        id:4,
        title:"FluentMigratorAliases",
        content:"FluentMigratorAliases",
        description:'',
        tags:''
    });

    y({
        url:'/Cake.FluentMigrator/Cake.FluentMigrator/api/Cake.FluentMigrator/FluentMigratorToolResolver',
        title:"FluentMigratorToolResolver",
        description:""
    });

    y({
        url:'/Cake.FluentMigrator/Cake.FluentMigrator/api/Cake.FluentMigrator/IFluentMigratorToolResolver',
        title:"IFluentMigratorToolResolver",
        description:""
    });

    y({
        url:'/Cake.FluentMigrator/Cake.FluentMigrator/api/Cake.FluentMigrator/FluentMigratorSettings',
        title:"FluentMigratorSettings",
        description:""
    });

    y({
        url:'/Cake.FluentMigrator/Cake.FluentMigrator/api/Cake.FluentMigrator/FluentMigratorRunner',
        title:"FluentMigratorRunner",
        description:""
    });

    y({
        url:'/Cake.FluentMigrator/Cake.FluentMigrator/api/Cake.FluentMigrator/FluentMigratorAliases',
        title:"FluentMigratorAliases",
        description:""
    });

    return {
        search: function(q) {
            return idx.search(q).map(function(i) {
                return idMap[i.ref];
            });
        }
    };
}();
