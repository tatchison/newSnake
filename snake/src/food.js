export default class Food{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
	update(position){
		if(this.position.x === x && this.position.y === y){
			//Food has been eaten
			
		}
	}
	render(context){
		context.save();
		context.fillStyle = 'red';
		context.fillRect(this.x, this.y, 1, 1);
		constext.restore();
	}
}