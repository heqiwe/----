var datas = [
  {
    name: "中国大学生计算机设计大赛",
    level: "学校认定级别: 重点支持学科竞赛",
    teacher: "比赛负责人: 程海英",
    time: "5月-7月",
  },
  {
    name: "蓝桥杯（软件）（电子）设计竞赛",
    level: "学校认定级别: 一般学科竞赛",
    teacher: "比赛负责人: 金兰",
    time: "11月-3月",
  },
  {
    name: "国际大学生程序设计竞赛ACM",
    level: "学校认定级别: 一般学科竞赛",
    teacher: "比赛负责人: 张硕",
    time: "5月",
  },
  {
    name: "中国大学生服务外包创新创业大赛",
    level: "学校认定级别: 一般学科竞赛",
    teacher: "比赛负责人: 溪利亚",
    time: "5月-7月",
  },
  {
    name: "大学生软件设计大赛",
    level: "学校认定级别: 一般学科竞赛",
    teacher: "比赛负责人: 彭焱",
    time: "5月-7月",
  },
  {
    name: "中国高校计算机大赛-大数据挑战赛、团体程序设计天梯赛、移动应用创新赛、网络技术挑战赛、人工智能创意赛",
    level: "学校认定级别: 重点支持学科竞赛",
    teacher: "比赛负责人: 刘智珺",
    time: "5月-7月",
  },
  {
    name: "华三杯",
    level: "学校认定级别: 无",
    teacher: "比赛负责人: 无",
    time: "11月-7月",
  },
];

function $(selector) {
  return document.querySelector(selector);
}
//初始化
var content = $(".content");

function appChilds(father, arr) {
  // 一次性添加多个子元素
  for (let i = 0; i < arr.length; i++) {
    father.appendChild(arr[i]);
  }
}

function init() {
  for (var i = 0; i < datas.length; i++) {
    var li = document.createElement("li");
    var div0 = document.createElement("div");
    var div1 = document.createElement("div");
    var divName = document.createElement("div");
    var divLevel = document.createElement("div");
    var divTeacher = document.createElement("div");
    var data = datas[i];

    content.appendChild(li);
    li.appendChild(div0);
    div0.className = "nameAndTeacher";
    //比赛名称
    div0.appendChild(divName);
    divName.className = "name";
    divName.innerText = data.name;
    //比赛等级
    div0.appendChild(divLevel);
    divLevel.className = "level";
    divLevel.innerText = data.level;
    //比赛负责老师
    div0.appendChild(divTeacher);
    divTeacher.className = "teacher";
    divTeacher.innerText = data.teacher;
    //比赛时间
    li.appendChild(div1);
    div1.className = "time";
    div1.innerText = data.time;
  }
}
init();
