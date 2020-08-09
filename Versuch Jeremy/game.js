var game =
{
    canvas: false,
    ctx: false,
    init: function()
    {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        game.enemies.create(10);
        game.towers.create(200,100);

        setInterval(game.update, 1000/30);

        window.requestAnimationFrame(game.draw);
    },
    update: function()
    {
        game.mapEntities.update();
    },
    draw: function()
    {
        game.ctx.clearRect(0,0,game.canvas.width, game.canvas.height);

        //game.drawCircle(100,100,5, 'rgb(250,0,0)');
        //game.drawCircle(200,100,20, 'rgb(0,0,250)');

        game.map.draw();
        game.mapEntities.draw();

        window.requestAnimationFrame(game.draw);
    },
    drawCircle: function(x,y,r,color)
    {
        game.ctx.beginPath();
        game.ctx.arc(x,y,r,0,2*Math.PI);
        game.ctx.fillStyle = color;
        game.ctx.fill();
    },
};

game.map = 
{
    wypoints: 
    [
        {x:  0, y: 100},
        {x:800, y: 100},
    ],
    draw: function()

    {
        game.ctx.fillStyle = 'rgb(100,100,100)'
        game.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);
    }
}

//erstellt map objekte 
game.towers = 
{
    create: function(x,y) //ein map objekt tower wird erstellt
    {
        var entity = game.mapEntities.create(x,y, 20, 'rgb(0,0,250)'); 
        entity.typ = 'tower';
        entity.update = function(){}; //die function wird leer gelassen da der tower sich nicht bewegen soll (die update funktion wuerde sonst immer die position des towers updaten)
        return entity;
    },
};

game.enemies =
{
    create: function(level)
    {
        var entity = game.mapEntities.create(0,0,level,'rgb(250,0,0)');
        entity.typ = 'enemy';  
        entity.speed = 1;
        entity.level = level;
        entity.velocity = {x:entity.speed, y:entity.speed};
        entity.update = function()
        {
            this.x += entity.velocity.x;
            this.y += entity.velocity.y;
        };
    },
};



game.mapEntities = 
{
    list: {},
    idCounter: 0,
    init: function(){},
    create: function(x,y,r,color)
    {
        var entity =
        {
            id: ++this.idCounter,
            x:x,
            y:y,
            r:r,
            color:color,
            update: function()
            {
                this.x++;
                this.y++;
            },
            draw: function()
            {
                game.drawCircle(this.x, this.y, this.r, this.color);
            },
        };
        this.list[entity.id] = entity;
        return entity;
    },
    update: function()
    {
        for(i in this.list) this.list[i].update();
    },
    draw: function()
    {
        for(i in this.list) this.list[i].draw();
    },
};