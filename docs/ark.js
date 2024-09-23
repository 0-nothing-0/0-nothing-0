
// 定义一个函数，当按钮点击时执行
function changeTo() {
    document.getElementById("ARKbt").style.display = "none";
    document.getElementById("input_bar").style.display = "block";
}
function search() {
    var userInput = document.getElementById("op_name").value;
    var potraiturl = "https://prts.wiki/w/" + userInput;
    document.getElementById("potrait").href = potraiturl;
    document.getElementById("potrait").textContent = userInput;
    //window.alert(potraiturl);
    document.getElementById("myModal").style.display = "block";
}
function closemodal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("ARKbt").style.display = "block";
    document.getElementById("input_bar").style.display = "none";
}
function random() {
    const values = [
        '阿米娅', '郁金香', '可露希尔', '杜宾', '末药', '红豆', '华法琳', '苏苏洛', '桃金娘', '傀影', '灰喉',
        '史尔特尔', '假日威龙陈', '温蒂', '格雷伊', '夏栎', '红云', '霜叶', '坚雷', '铸铁', '格劳克斯',
        '月禾', '伊桑', '极境', '微风', '亚叶', '褐果', '炎客', '柏喙', '酸糖', '卡达', '晓歌', '刻刀',
        '鸿雪', '泡泡', '蜜蜡', '巫恋', '刻俄柏', '波登可', '慑砂', '泥岩', '清流', '罗小黑', '稀音',
        '絮雨', '暴雨', '杰克', '奥达', '休谟斯', '铃兰', '明椒', '妮芙', '渡桥', '12F', '凯尔希',
        '维什戴尔', '博士', 'W', '伊内丝', '赫德雷', '魔王', '逻各斯', '术髓', '触痕', '锋刃', '风暴眼',
        '煌', '迷迭香', 'Lancet-2', 'Castle-3', 'THRM-EX', 'Friston-3', 'PhonoR-0', '夜刀', '巡林者', '黑角',
        '杜林', '芬', '克洛丝', '芙蓉', '米格鲁', '炎熔', '玫兰莎', '史都华德', '安赛尔', '安德切尔', '卡缇',
        '梓兰', '月见夜', '空爆', '斑点', '泡普卡', '阿斯卡纶', '红', '清道夫', '炎狱炎熔', '寒芒克洛丝',
        '濯尘芙蓉', '历阵锐枪芬', '百炼嘉维尔', '承曦格雷伊', '乌尔比安', '斯卡蒂', '幽灵鲨', '蓝毒', '深海色',
        '歌蕾蒂娅', '深巡', '海霓', '赫拉格', '芙兰卡', '雷蛇', '杰西卡', '香草', '杏仁', '涤火杰西卡', '龙舌兰',
        '羽毛笔', '跃跃', '露托', '布丁', '山', '卡夫卡', '罗宾', '松果', '罗比菈塔', '蚀清', '豆苗',
        '石英', '掠风', '玫拉', '冰酿', '锡人', '霍尔海雅', '浊心斯卡蒂', '归溟幽灵鲨', '焰影苇草', '和弦',
        '闪灵', '临光', '夜莺', '推进之王', '摩根', '因陀罗', '达格达', '缠丸', '宴', '赤冬', '绮良', '水月',
        '风丸', '嵯峨', '苇草', '棘刺', '安哲拉', '深靛', '艾丽妮', '流明', '海沫', '艾丝黛尔', '蛇屠箱', '嘉维尔',
        '耶拉', '银灰', '灵知', '角峰', '讯使', '初雪', '崖心', '锏', '极光', '耀骑士临光', '白金', '砾', '鞭刃',
        '玛恩纳', '瑕光', '但书', '焰尾', '灰毫', '远牙', '野鬃', '正义骑士号', '魏彦吾', '文月', '陈', '星熊',
        '诗怀雅', '白雪', '阿消', '槐琥', '孑', '拜松', '雪雉', '老鲤', '吽', '阿', '林', '琳琅诗怀雅',
        '地灵', '艾雅法拉', '卡涅利安', '黑键', '车尔尼', '止颂', '纯烬艾雅法拉', '薇薇安娜', '深律', '折光',
        '送葬人', '安比尔', '翎羽', '芳汀', '空弦', '见行者', '菲亚梅塔', '空构', '隐现', '塑心', '圣约送葬人',
        '莫斯提马', '泰拉大陆调查团', '麒麟R夜刀', '火龙S黑角', '断罪者', '火神', '调香师', '帕拉斯', '埃拉托',
        '年', '夕', '令', '重岳', '黍', '德克萨斯', '能天使', '可颂', '空', '缄默德克萨斯', '暴行',
        '暗索', '莱恩哈特', '断崖', '石棉', '蜜莓', '四月', '火哨', '洋灰', '夜半', '温米', '莱伊',
        '赫默', '塞雷娅', '伊芙利特', '白面鸮', '梅尔', '麦哲伦', '多萝西', '星源', '缪尔赛思', '淬羽赫默',
        '星极', '灰烬', '闪击', '霜华', '战车', '艾拉', '医生', '双月', '导火索', '风笛', '狮蝎',
        '森蚺', '特米米', '燧石', '异客', '图耶', '至简', '铅踝', '红隼', '佩佩', '娜仁图亚', '莎草',
        '衡沙', '远山', '寒檀', '雪绒', '凛视', '提丰', '天火', '拉普兰德', '安洁莉娜', '普罗旺斯',
        '贾维', '布洛卡', '奥斯塔', '斥罪', '伺夜', '子月', '阿罗玛', '锡兰', '黑', '苍苔', '青枳',
        '守林人', '流星', '陨星', 'U-Official', '猎蜂', '苦艾', '凛冬', '真理', '古米', '早露', '烈夏',
        '梅', '夜烟', '夜魔', '慕斯', '格拉尼', '暮落', '薄绿', '澄闪', '琴柳', '熔泉', '爱丽丝', '贝娜',
        '号角', '白铁', '洛洛', '海蒂', '谜图', '戴菲恩', '刺玫', '维荻', '哈洛德', '食铁兽', '桑葚',
        '惊蛰', '左乐', '九色鹿', '乌有', '万顷', '小满', '截云', '铎铃', '仇白'
    ];
    const randomIndex = Math.floor(Math.random() * values.length);
    var userInput = values[randomIndex];
    var potraiturl = "https://prts.wiki/w/" + userInput;
    document.getElementById("potrait").href = potraiturl;
    document.getElementById("potrait").textContent = userInput;
    //window.alert(potraiturl);
    document.getElementById("myModal").style.display = "block";
}