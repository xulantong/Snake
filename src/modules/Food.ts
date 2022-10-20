/**
 * 食物类
 */
class Food {
    private ele: HTMLElement;

    constructor() {
        this.ele = document.getElementById('food')!;
    }

    // 定义一个获取食物X轴坐标的方法
    get X() {
        return this.ele.offsetLeft;
    }

    // 定义一个获取食物Y轴坐标的方法
    get Y() {
        return this.ele.offsetTop;
    }
    change() {
        // 生成一个随机的位置
        // 食物的位置最小是0， 最大是290
        // 蛇移动一次就是一格，一格大小就是10，所以要求 食物的坐标必须是整10

        // Math.round(Math.random() * 290);
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        // Math.floor(Math.random() * 30) * 10;//向下取整

        this.ele.style.left = top + 'px';
        this.ele.style.top = left + 'px';
    }

}

export default Food