class TreasureMap {
  static getInitialClue() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("在古老的图书馆里找到了第一个线索...",'images/library.jpg');
      }, 1000);
    });
  }


  static decodeAncientScript(clue) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!clue) {
          reject("没有线索可以解码!");
        }
        resolve("解码成功!宝藏在一座古老的神庙中...",'images/temple.jpg');
      }, 1500);
    });
  }

  static searchTemple(_location) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0) {
          reject("糟糕!遇到了神庙守卫!");
        }
        resolve("找到了一个神秘的箱子...");
      }, 2000);
    });
  }

  static solvePuzzle() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0) {
          reject("谜题太难了，无法解开!");
        }
        resolve("谜题解开!箱子打开了但是里面似乎还有一把锁...");
      }, 1500);
    });
  }

  static openTreasureBox(key = true) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (key) {
          resolve("恭喜!你找到了传说中的宝藏!");
        } else {
          reject("箱子被锁住了，需要一把钥匙才能打开!");
        }
      }, 1000);
    });
  }
}

async function findTreasure() {
  try {
    let clue = await TreasureMap.getInitialClue();
    console.log(clue);
    addTextAnimation(clue);

    let location = await TreasureMap.decodeAncientScript(clue,'web-treasure./images./library.jpg');
    console.log(location);
    addTextAnimation(location);
    let foundKey = false; // 默认为未找到钥匙
    
   

    // 模拟找到古朴的钥匙
    if (Math.random() < 1) { // 100%的概率找到钥匙
      console.log("在书架上发现了一把古朴的钥匙。");
      addTextAnimation("在书架上发现了一把古朴的钥匙。");
      let takeKey = confirm("是否带走这把古朴的钥匙？(点击确定带走，取消则不带走)");
      if (takeKey) {
        console.log("你带走了古朴的钥匙。");
        addTextAnimation("你带走了古朴的钥匙。");
        foundKey = true; // 玩家选择了带走钥匙
      } else {
        console.log("你决定不带走古朴的钥匙。");
        addTextAnimation("你决定不带走古朴的钥匙。");
        // foundKey 保持为 false
      }
    }

    // 搜索宝藏地图中的寺庙
    let box = await TreasureMap.searchTemple(location);
    // 打印搜索结果
    console.log(box);
    // 添加文本动画
    addTextAnimation(box,'web-treasure./images./temple.jpg');
    // 模拟遇到神庙守卫
    console.log("糟糕!遇到了神庙守卫!");
    addTextAnimation("糟糕!遇到了神庙守卫!");
    let escapeGuard = confirm("你想向左走还是向右走？(点击确定向左走，取消则向右走)");
    if (escapeGuard) {
      console.log("你选择了向左走。");
      addTextAnimation("你选择了向左走。");
     } else {
     console.log("你选择了向右走。");
     addTextAnimation("你选择了向右走。");
}

// 模拟摆脱神庙守卫
    let escapeSuccess = Math.random() < 0.5; // 50%的概率摆脱成功
    if (escapeSuccess) {

      console.log("你成功摆脱了神庙守卫。");
      addTextAnimation("你成功摆脱了神庙守卫。", 'images/escape.png');
     ;
 
    try {

      await TreasureMap.solvePuzzle();

    // 如果谜题解开，则尝试打开宝藏箱
      let treasure = await TreasureMap.openTreasureBox(foundKey);
      console.log(treasure);
      addTextAnimation("怎么会还有一个盒子！",'images/box.png');
      addTextAnimation(treasure); 
      console.log(treasure);
      addTextAnimation("恭喜！你找到了传说中的宝藏！",'/daima./web-treasure./images./treasure.png');
  } catch (error) {
    // 谜题解开失败
    console.error("任务失败:", error);
    addTextAnimation("任务失败:谜题太难了，无法解开! " );
     // 重新抛出错误以结束游戏
  }
} else {
  console.log("你被神庙守卫抓住了，寻宝失败!");
  addTextAnimation("你被神庙守卫抓住了，寻宝失败!",'web-treasure./images./caught.png');
  // 这里不使用 return，而是继续执行后续的代码
}
    


  } catch (error) {
    console.error("任务失败:", error);
    addTextAnimation("任务失败: " + error.message);
  }
}


// 文本动画展示寻宝过程
function animateTreasureHunt() {
  findTreasure().then(() => {
    console.log("寻宝动画结束。");
    addTextAnimation("寻宝动画结束。");
  });
}
function addTextAnimation(text, imageUrl = 'images/start.jpg') {
  const animationText = document.getElementById('animationText');
  const treasureImage = document.getElementById('treasureImage');
  if (animationText) {
    animationText.textContent = text;
  }
  if (treasureImage) {
    treasureImage.src = imageUrl;
  }
}




animateTreasureHunt();