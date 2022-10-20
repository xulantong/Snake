class Panel {
    score: number = 0
    level: number = 1

    // 分数和等级所在的元素，在构造函数种进行初始化
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    // 设置一个变量限制等级
    maxLevel: number;
    // 设置一个变量表示多少分时升级
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '分';
        if (this.score % this.upScore === 0) {
            this.upLevel()
        }
    }
    upLevel() {
        if (this.level >= this.maxLevel) {
            return;
        }
        this.levelEle.innerHTML = ++this.level + '级';
    }

}
export default Panel