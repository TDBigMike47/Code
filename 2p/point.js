class Point {
    constructor(x,y){
	this.x=x;
	this.y=y;
    };
    toString(){return "("+this.x+"."+this.y+")"};
    distance(p){
/*	x:3,
        y:4,
        DistanciaAb:Function(p2){
	x2= p2.x-aPoint.x;
	y2= p2.y-aPoint.y;
	d1=x2**2;
	d2=y2**2;
	    return Math.sqrt(d1+d2);*/
	};
    clone(){return new Point(this.x,this.y)};
}
	       
