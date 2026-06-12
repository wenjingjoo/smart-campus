/* ============================================================
 *  智慧校园 - 线上校园服务平台 完整交互逻辑
 *  版本: v2.0
 *  更新日期: 2026-06-12
 * ============================================================ */

// ======================== 1. 商家数据配置 ========================
// 14个商家的完整信息（名称、类型、电话、地址、营业时间、描述、服务列表、图片等）
const merchantsData = [
    {
        id: 1,
        name: '学一食堂',
        type: 'restaurant',
        typeLabel: '🍽️ 校园餐厅',
        location: '一楼',
        phone: '010-88001001',
        address: '学生生活区 A 栋一楼',
        hours: '06:30 - 21:00',
        rating: 4.8,
        reviewCount: 326,
        avgPrice: '人均 ¥8-15',
        description: '提供早中晚餐，涵盖川菜、粤菜、面食、快餐等多种菜系，菜品丰富、价格实惠，是同学们日常就餐的首选。',
        image: 'images/restaurants/restaurant1.jpg',
        badge: 'hot',
        tags: ['可订餐', '可堂食', '可打包', '支持校园卡'],
        services: ['堂食就餐', '在线订餐', '打包外带', '包间预订'],
        reviews: [
            { user: '李同学', text: '红烧肉超好吃，每次必点！', rating: 5 },
            { user: '王同学', text: '早餐的豆浆油条很正宗。', rating: 4 },
            { user: '赵同学', text: '种类多，价格便宜，推荐。', rating: 5 }
        ]
    },
    {
        id: 2,
        name: '学二食堂',
        type: 'restaurant',
        typeLabel: '🍽️ 校园餐厅',
        location: '二楼',
        phone: '010-88001002',
        address: '学生生活区 A 栋二楼',
        hours: '06:30 - 21:00',
        rating: 4.6,
        reviewCount: 218,
        avgPrice: '人均 ¥6-12',
        description: '特色中式快餐，自选菜品，称重计价，经济实惠，菜品每日更新，保证新鲜。',
        image: 'images/restaurants/restaurant2.jpg',
        badge: null,
        tags: ['可订餐', '自选称重', '支持校园卡'],
        services: ['堂食就餐', '在线订餐', '自选称重'],
        reviews: [
            { user: '孙同学', text: '自选模式很灵活，想吃多少拿多少。', rating: 5 },
            { user: '周同学', text: '菜品每天不重样，不错。', rating: 4 }
        ]
    },
    {
        id: 3,
        name: '兰州拉面馆',
        type: 'restaurant',
        typeLabel: '🍜 面食专区',
        location: '学一食堂三楼',
        phone: '010-88001003',
        address: '学生生活区 A 栋三楼',
        hours: '07:00 - 21:30',
        rating: 4.7,
        reviewCount: 189,
        avgPrice: '人均 ¥10-18',
        description: '正宗兰州拉面，牛肉面、刀削面、炒面等多种选择，汤鲜面筋道，分量十足。',
        image: 'images/restaurants/noodle1.jpg',
        badge: null,
        tags: ['可订餐', '可外卖', '支持校园卡'],
        services: ['堂食就餐', '在线订餐', '外卖配送'],
        reviews: [
            { user: '吴同学', text: '牛肉面绝了，汤头很正宗！', rating: 5 },
            { user: '郑同学', text: '刀削面也很好吃，推荐加辣。', rating: 4 }
        ]
    },
    {
        id: 4,
        name: '书香咖啡',
        type: 'restaurant',
        typeLabel: '☕ 咖啡厅',
        location: '图书馆一楼',
        phone: '010-88001004',
        address: '图书馆一楼东侧',
        hours: '08:00 - 22:00',
        rating: 4.9,
        reviewCount: 412,
        avgPrice: '人均 ¥15-30',
        description: '精品手冲咖啡、奶茶、甜点，学习休闲好去处，环境安静优雅，WiFi和插座充足。',
        image: 'images/restaurants/cafe1.jpg',
        badge: 'new',
        tags: ['可订餐', 'WiFi', '插座充足', '支持校园卡'],
        services: ['堂食就餐', '在线订餐', '学习空间', 'WiFi'],
        reviews: [
            { user: '陈同学', text: '拿铁超好喝，写论文必备。', rating: 5 },
            { user: '林同学', text: '提拉米苏也很赞，环境满分。', rating: 5 },
            { user: '黄同学', text: '插座多，适合带电脑来学习。', rating: 4 }
        ]
    },
    {
        id: 5,
        name: '校园便利店',
        type: 'supermarket',
        typeLabel: '🛒 超市',
        location: '学生公寓一楼',
        phone: '010-88001005',
        address: '学生公寓 B 栋一楼',
        hours: '07:00 - 23:00',
        rating: 4.5,
        reviewCount: 156,
        avgPrice: '📞 010-88001005',
        description: '日用百货、零食饮料、文具用品、洗护用品一应俱全，支持校园卡和现金支付。',
        image: 'images/supermarkets/supermarket1.jpg',
        badge: null,
        tags: ['支持校园卡', '可配送', '24小时'],
        services: ['商品零售', '配送上门', '校园卡支付'],
        reviews: [
            { user: '杨同学', text: '很方便，楼下就能买到东西。', rating: 4 },
            { user: '刘同学', text: '种类齐全，价格也公道。', rating: 4 }
        ]
    },
    {
        id: 6,
        name: '学子书店',
        type: 'supermarket',
        typeLabel: '📚 书店文具',
        location: '教学楼一楼',
        phone: '010-88001006',
        address: '教学楼 A 栋一楼大厅',
        hours: '08:00 - 20:00',
        rating: 4.7,
        reviewCount: 98,
        avgPrice: '📞 010-88001006',
        description: '教材教辅、课外读物、文具用品、打印复印服务，开学季教材预定享折扣。',
        image: 'images/supermarkets/bookstore1.jpg',
        badge: null,
        tags: ['教材预定', '打印复印', '支持校园卡'],
        services: ['图书零售', '教材预定', '打印复印', '文具销售'],
        reviews: [
            { user: '张同学', text: '打印很方便，价格也便宜。', rating: 5 },
            { user: '马同学', text: '教材预定很省心，开学直接来拿。', rating: 4 }
        ]
    },
    {
        id: 7,
        name: '校医务室',
        type: 'clinic',
        typeLabel: '🏥 综合门诊',
        location: '行政楼一楼',
        phone: '010-88001007',
        address: '行政楼一楼西侧',
        hours: '08:00 - 17:30（急诊24小时）',
        rating: 4.9,
        reviewCount: 520,
        avgPrice: '📞 010-88001007',
        description: '内科、外科、口腔科，日常诊疗、健康咨询、药品发放，学生医保可用。',
        image: 'images/clinics/clinic1.jpg',
        badge: 'hot',
        tags: ['可预约', '医保可用', '急诊24h', '免费咨询'],
        services: ['内科诊疗', '外科处理', '健康咨询', '药品发放', '体检服务'],
        reviews: [
            { user: '钱同学', text: '医生很耐心，态度很好。', rating: 5 },
            { user: '韩同学', text: '医保报销很方便，基本不花钱。', rating: 5 },
            { user: '曹同学', text: '急诊响应很快，半夜也放心。', rating: 5 }
        ]
    },
    {
        id: 8,
        name: '口腔诊所',
        type: 'clinic',
        typeLabel: '🦷 口腔科',
        location: '医务室二楼',
        phone: '010-88001008',
        address: '行政楼二楼东侧',
        hours: '09:00 - 17:00',
        rating: 4.8,
        reviewCount: 87,
        avgPrice: '📞 010-88001008',
        description: '洗牙、补牙、拔牙、正畸咨询，学生优惠价格，专业口腔医生坐诊。',
        image: 'images/clinics/dental1.jpg',
        badge: null,
        tags: ['可预约', '学生优惠', '医保可用'],
        services: ['洗牙', '补牙', '拔牙', '正畸咨询', '口腔检查'],
        reviews: [
            { user: '冯同学', text: '洗牙很仔细，价格也便宜。', rating: 5 },
            { user: '许同学', text: '补牙技术很好，不疼。', rating: 4 }
        ]
    },
    {
        id: 9,
        name: '校园服务大厅',
        type: 'office',
        typeLabel: '🏢 综合服务',
        location: '行政中心',
        phone: '010-88001009',
        address: '行政中心一楼大厅',
        hours: '08:30 - 17:00（工作日）',
        rating: 4.6,
        reviewCount: 245,
        avgPrice: '📞 010-88001009',
        description: '一卡通办理、网络开通、学籍证明、事务咨询等综合行政服务，支持在线取号。',
        image: 'images/offices/office1.jpg',
        badge: null,
        tags: ['在线取号', '进度查询', '材料下载'],
        services: ['一卡通办理', '网络开通', '学籍证明', '事务咨询', '材料下载'],
        reviews: [
            { user: '蒋同学', text: '在线取号很方便，不用排队等。', rating: 4 },
            { user: '沈同学', text: '工作人员态度好，办事效率高。', rating: 5 }
        ]
    },
    {
        id: 10,
        name: '校游泳馆',
        type: 'swimming',
        typeLabel: '🏊 体育设施',
        location: '体育馆一楼',
        phone: '010-88001010',
        address: '体育馆一楼南侧',
        hours: '06:00 - 22:00',
        rating: 4.8,
        reviewCount: 310,
        avgPrice: '¥15/次',
        description: '标准50m泳池，恒温水质，专业教练，游泳课程，学生享半价优惠。',
        image: 'images/swimming/pool1.jpg',
        badge: 'hot',
        tags: ['可预订', '教练课程', '学生优惠', '淋浴更衣'],
        services: ['自由泳', '游泳课程', '私教训练', '场馆租赁'],
        reviews: [
            { user: '魏同学', text: '水质很好，恒温游泳很舒服。', rating: 5 },
            { user: '陆同学', text: '学生价很划算，经常来。', rating: 5 }
        ]
    },
    {
        id: 11,
        name: '健身中心',
        type: 'others',
        typeLabel: '💪 健身房',
        location: '体育馆二楼',
        phone: '010-88001011',
        address: '体育馆二楼北侧',
        hours: '06:30 - 22:00',
        rating: 4.7,
        reviewCount: 178,
        avgPrice: '¥10/次',
        description: '专业器械区、有氧区、瑜伽室、私教课程，设施齐全，学生优惠价格。',
        image: 'images/others/gym1.jpg',
        badge: null,
        tags: ['可预订', '私教课程', '学生优惠'],
        services: ['器械训练', '有氧运动', '瑜伽课程', '私教指导'],
        reviews: [
            { user: '方同学', text: '器械很全，环境不错。', rating: 4 },
            { user: '谢同学', text: '瑜伽课很好，老师很专业。', rating: 5 }
        ]
    },
    {
        id: 12,
        name: '快递驿站',
        type: 'others',
        typeLabel: '📦 快递服务',
        location: '学生公寓旁',
        phone: '010-88001012',
        address: '学生公寓 B 栋旁',
        hours: '08:00 - 21:00',
        rating: 4.5,
        reviewCount: 430,
        avgPrice: '📞 010-88001012',
        description: '快递收发、包裹寄存、智能取件柜、代寄服务，支持所有主流快递公司。',
        image: 'images/others/delivery1.jpg',
        badge: null,
        tags: ['智能取件', '代寄服务', '包裹查询'],
        services: ['快递收发', '包裹寄存', '代寄服务', '包裹查询'],
        reviews: [
            { user: '邹同学', text: '取件很方便，有智能柜。', rating: 4 },
            { user: '彭同学', text: '代寄服务很实用。', rating: 4 }
        ]
    },
    {
        id: 13,
        name: '图书馆自习室',
        type: 'others',
        typeLabel: '📖 学习空间',
        location: '图书馆三楼',
        phone: '010-88001013',
        address: '图书馆三楼北侧',
        hours: '07:00 - 23:00',
        rating: 4.9,
        reviewCount: 680,
        avgPrice: '📞 010-88001013',
        description: '安静自习区、研讨室、电子阅览室，在线预约座位，空调WiFi全覆盖。',
        image: 'images/others/library1.jpg',
        badge: null,
        tags: ['座位预约', '研讨室', 'WiFi', '空调'],
        services: ['自习座位', '研讨室预订', '电子阅览', '打印服务'],
        reviews: [
            { user: '秦同学', text: '环境超安静，学习效率很高。', rating: 5 },
            { user: '江同学', text: '预约座位很方便，不用抢位置了。', rating: 5 },
            { user: '顾同学', text: '空调给力，夏天也不怕。', rating: 4 }
        ]
    },
    {
        id: 14,
        name: '校园理发店',
        type: 'others',
        typeLabel: '💇 美发服务',
        location: '商业街',
        phone: '010-88001014',
        address: '校园商业街 C 区 12 号',
        hours: '09:00 - 21:00',
        rating: 4.6,
        reviewCount: 92,
        avgPrice: '人均 ¥20-35',
        description: '理发、染发、造型，学生专属优惠价格，技术过硬，环境整洁。',
        image: 'images/others/barbershop1.jpg',
        badge: 'new',
        tags: ['可预约', '学生优惠', '支持校园卡'],
        services: ['理发', '染发', '造型设计', '头皮护理'],
        reviews: [
            { user: '余同学', text: '剪得不错，学生价很实惠。', rating: 4 },
            { user: '叶同学', text: '环境干净，师傅手艺好。', rating: 5 }
        ]
    }
];

// ======================== 2. 菜单数据 ========================
// 4个餐厅各自的菜单（推荐/套餐/单品/饮品分类）
const menuData = {
    1: {
        name: '学一食堂',
        recommend: [
            { id: 101, name: '红烧肉套餐', price: 12, desc: '招牌红烧肉配米饭+时蔬+汤', emoji: '🍖' },
            { id: 102, name: '宫保鸡丁', price: 10, desc: '经典川菜，花生鸡丁香辣可口', emoji: '🍗' },
            { id: 103, name: '酸菜鱼', price: 14, desc: '鲜嫩鱼片配酸菜，酸辣开胃', emoji: '🐟' },
            { id: 104, name: '番茄炒蛋饭', price: 8, desc: '家常番茄炒蛋配米饭', emoji: '🍳' },
            { id: 105, name: '糖醋里脊', price: 11, desc: '外酥里嫩，酸甜适口', emoji: '🥩' }
        ],
        set: [
            { id: 201, name: '营养A套餐', price: 15, desc: '红烧肉+清炒时蔬+米饭+紫菜蛋花汤', emoji: '🍱' },
            { id: 202, name: '营养B套餐', price: 13, desc: '宫保鸡丁+番茄炒蛋+米饭+冬瓜汤', emoji: '🍱' },
            { id: 203, name: '减脂套餐', price: 12, desc: '鸡胸肉沙拉+糙米饭+蔬菜汁', emoji: '🥗' },
            { id: 204, name: '早餐套餐', price: 6, desc: '豆浆+油条+鸡蛋+小咸菜', emoji: '🥣' }
        ],
        single: [
            { id: 301, name: '白米饭', price: 1, desc: '东北大米，软糯香甜', emoji: '🍚' },
            { id: 302, name: '馒头', price: 0.5, desc: '手工大馒头', emoji: '🥟' },
            { id: 303, name: '炒河粉', price: 8, desc: '广式炒河粉，豆芽肉丝', emoji: '🍜' },
            { id: 304, name: '水饺（10个）', price: 10, desc: '猪肉白菜馅，手工包制', emoji: '🥟' },
            { id: 305, name: '煎饼果子', price: 6, desc: '天津风味，加蛋加肠', emoji: '🥞' }
        ],
        drink: [
            { id: 401, name: '豆浆', price: 2, desc: '现磨热豆浆', emoji: '🥛' },
            { id: 402, name: '酸梅汤', price: 3, desc: '冰镇酸梅汤，消暑解渴', emoji: '🧊' },
            { id: 403, name: '可乐/雪碧', price: 3, desc: '330ml 罐装', emoji: '🥤' },
            { id: 404, name: '鲜榨橙汁', price: 5, desc: '现榨鲜橙汁', emoji: '🍊' }
        ]
    },
    2: {
        name: '学二食堂',
        recommend: [
            { id: 501, name: '鱼香肉丝', price: 9, desc: '经典川味，下饭神器', emoji: '🥩' },
            { id: 502, name: '麻婆豆腐', price: 7, desc: '麻辣鲜香，嫩滑入味', emoji: '🫘' },
            { id: 503, name: '回锅肉', price: 10, desc: '五花肉配蒜苗，香而不腻', emoji: '🥓' },
            { id: 504, name: '蛋炒饭', price: 6, desc: '粒粒分明，蛋香四溢', emoji: '🍳' },
            { id: 505, name: '清炒西兰花', price: 5, desc: '健康蔬菜，清淡爽口', emoji: '🥦' }
        ],
        set: [
            { id: 601, name: '两荤一素套餐', price: 14, desc: '自选两荤一素+米饭+汤', emoji: '🍱' },
            { id: 602, name: '一荤两素套餐', price: 11, desc: '自选一荤两素+米饭+汤', emoji: '🍱' },
            { id: 603, name: '全素套餐', price: 8, desc: '三款素菜+米饭+汤', emoji: '🥗' },
            { id: 604, name: '夜宵套餐', price: 10, desc: '炒面+卤蛋+豆浆', emoji: '🌙' }
        ],
        single: [
            { id: 701, name: '米饭（按份）', price: 1, desc: '可加量', emoji: '🍚' },
            { id: 702, name: '馒头', price: 0.5, desc: '大个手工馒头', emoji: '🥟' },
            { id: 703, name: '炒面', price: 7, desc: '肉丝炒面', emoji: '🍜' },
            { id: 704, name: '粥（小米/南瓜）', price: 2, desc: '养生粥品', emoji: '🥣' },
            { id: 705, name: '茶叶蛋', price: 1.5, desc: '卤味茶叶蛋', emoji: '🥚' }
        ],
        drink: [
            { id: 801, name: '绿豆汤', price: 2, desc: '消暑必备', emoji: '🥣' },
            { id: 802, name: '矿泉水', price: 1.5, desc: '550ml', emoji: '💧' },
            { id: 803, name: '奶茶', price: 5, desc: '珍珠奶茶', emoji: '🧋' },
            { id: 804, name: '柠檬水', price: 3, desc: '鲜柠檬泡制', emoji: '🍋' }
        ]
    },
    3: {
        name: '兰州拉面馆',
        recommend: [
            { id: 901, name: '牛肉拉面（大碗）', price: 16, desc: '正宗兰州牛肉面，汤鲜面筋', emoji: '🍜' },
            { id: 902, name: '牛肉拉面（小碗）', price: 12, desc: '经典小份牛肉面', emoji: '🍜' },
            { id: 903, name: '刀削面', price: 13, desc: '手工刀削面，配牛肉浇头', emoji: '🍝' },
            { id: 904, name: '炒拉面', price: 14, desc: '牛肉炒拉面，香辣可口', emoji: '🥘' },
            { id: 905, name: '凉皮', price: 8, desc: '陕西风味凉皮，酸辣爽口', emoji: '🥢' }
        ],
        set: [
            { id: 1001, name: '拉面+凉菜套餐', price: 18, desc: '牛肉拉面+凉拌黄瓜', emoji: '🍱' },
            { id: 1002, name: '双人套餐', price: 30, desc: '两碗拉面+凉皮+两瓶饮料', emoji: '🍱' },
            { id: 1003, name: '拉面+鸡蛋套餐', price: 14, desc: '牛肉拉面+卤蛋', emoji: '🍱' },
            { id: 1004, name: '刀削面+肉夹馍', price: 20, desc: '刀削面+陕西肉夹馍', emoji: '🍱' }
        ],
        single: [
            { id: 1101, name: '肉夹馍', price: 8, desc: '陕西风味肉夹馍', emoji: '🥙' },
            { id: 1102, name: '卤蛋', price: 2, desc: '入味卤蛋', emoji: '🥚' },
            { id: 1103, name: '牛肉切片（加量）', price: 8, desc: '额外添加牛肉片', emoji: '🥩' },
            { id: 1104, name: '凉拌黄瓜', price: 5, desc: '爽脆小菜', emoji: '🥒' },
            { id: 1105, name: '茶叶蛋', price: 1.5, desc: '卤味茶叶蛋', emoji: '🥚' }
        ],
        drink: [
            { id: 1201, name: '冰峰汽水', price: 3, desc: '西安经典汽水', emoji: '🥤' },
            { id: 1202, name: '酸梅汤', price: 3, desc: '冰镇酸梅汤', emoji: '🧊' },
            { id: 1203, name: '矿泉水', price: 1.5, desc: '550ml', emoji: '💧' },
            { id: 1204, name: '酸奶', price: 4, desc: '原味酸奶', emoji: '🥛' }
        ]
    },
    4: {
        name: '书香咖啡',
        recommend: [
            { id: 1301, name: '经典拿铁', price: 18, desc: '浓缩咖啡+香浓牛奶', emoji: '☕' },
            { id: 1302, name: '美式咖啡', price: 12, desc: '双份浓缩+热水，醇厚回甘', emoji: '☕' },
            { id: 1303, name: '珍珠奶茶', price: 15, desc: '手工珍珠，香浓奶茶', emoji: '🧋' },
            { id: 1304, name: '提拉米苏', price: 22, desc: '意式经典甜品，咖啡香浓', emoji: '🍰' },
            { id: 1305, name: '抹茶蛋糕', price: 20, desc: '日式抹茶，清新不腻', emoji: '🧁' }
        ],
        set: [
            { id: 1401, name: '咖啡+蛋糕套餐', price: 30, desc: '任意咖啡+任意蛋糕', emoji: '🍱' },
            { id: 1402, name: '下午茶套餐', price: 35, desc: '两杯饮品+三款甜点拼盘', emoji: '🍱' },
            { id: 1403, name: '学习套餐', price: 25, desc: '美式咖啡+三明治', emoji: '🍱' },
            { id: 1404, name: '双人分享套餐', price: 45, desc: '两杯饮品+提拉米苏+曲奇拼盘', emoji: '🍱' }
        ],
        single: [
            { id: 1501, name: '三明治', price: 12, desc: '火腿芝士三明治', emoji: '🥪' },
            { id: 1502, name: '曲奇饼干', price: 8, desc: '手工曲奇（3块）', emoji: '🍪' },
            { id: 1503, name: '可颂面包', price: 6, desc: '酥脆可颂', emoji: '🥐' },
            { id: 1504, name: '华夫饼', price: 10, desc: '比利时华夫配奶油', emoji: '🧇' },
            { id: 1505, name: '水果沙拉', price: 15, desc: '新鲜水果拼盘', emoji: '🍓' }
        ],
        drink: [
            { id: 1601, name: '卡布奇诺', price: 20, desc: '浓缩咖啡+奶泡，绵密细腻', emoji: '☕' },
            { id: 1602, name: '摩卡咖啡', price: 22, desc: '巧克力+咖啡+牛奶', emoji: '☕' },
            { id: 1603, name: '芒果冰沙', price: 16, desc: '鲜芒果打制冰沙', emoji: '🥭' },
            { id: 1604, name: '柠檬红茶', price: 12, desc: '鲜柠檬+红茶，清爽解渴', emoji: '🍋' },
            { id: 1605, name: '热巧克力', price: 15, desc: '浓郁可可，温暖冬日', emoji: '🍫' }
        ]
    }
};

// ======================== 3. 文件目录数据 ========================
// 所有图片文件的路径映射
const fileData = {
    all: [
        { name: 'hero.jpg', path: 'images/hero.jpg', folder: '根目录' },
        { name: 'hero2.jpg', path: 'images/hero2.jpg', folder: '根目录' },
        { name: 'restaurant1.jpg', path: 'images/restaurants/restaurant1.jpg', folder: '餐厅' },
        { name: 'restaurant2.jpg', path: 'images/restaurants/restaurant2.jpg', folder: '餐厅' },
        { name: 'noodle1.jpg', path: 'images/restaurants/noodle1.jpg', folder: '餐厅' },
        { name: 'cafe1.jpg', path: 'images/restaurants/cafe1.jpg', folder: '餐厅' },
        { name: 'supermarket1.jpg', path: 'images/supermarkets/supermarket1.jpg', folder: '超市' },
        { name: 'bookstore1.jpg', path: 'images/supermarkets/bookstore1.jpg', folder: '超市' },
        { name: 'clinic1.jpg', path: 'images/clinics/clinic1.jpg', folder: '医务室' },
        { name: 'dental1.jpg', path: 'images/clinics/dental1.jpg', folder: '医务室' },
        { name: 'office1.jpg', path: 'images/offices/office1.jpg', folder: '营业厅' },
        { name: 'pool1.jpg', path: 'images/swimming/pool1.jpg', folder: '游泳馆' },
        { name: 'gym1.jpg', path: 'images/others/gym1.jpg', folder: '其他' },
        { name: 'delivery1.jpg', path: 'images/others/delivery1.jpg', folder: '其他' },
        { name: 'library1.jpg', path: 'images/others/library1.jpg', folder: '其他' },
        { name: 'barbershop1.jpg', path: 'images/others/barbershop1.jpg', folder: '其他' }
    ],
    restaurants: [
        { name: 'restaurant1.jpg', path: 'images/restaurants/restaurant1.jpg', folder: '餐厅' },
        { name: 'restaurant2.jpg', path: 'images/restaurants/restaurant2.jpg', folder: '餐厅' },
        { name: 'noodle1.jpg', path: 'images/restaurants/noodle1.jpg', folder: '餐厅' },
        { name: 'cafe1.jpg', path: 'images/restaurants/cafe1.jpg', folder: '餐厅' }
    ],
    supermarkets: [
        { name: 'supermarket1.jpg', path: 'images/supermarkets/supermarket1.jpg', folder: '超市' },
        { name: 'bookstore1.jpg', path: 'images/supermarkets/bookstore1.jpg', folder: '超市' }
    ],
    clinics: [
        { name: 'clinic1.jpg', path: 'images/clinics/clinic1.jpg', folder: '医务室' },
        { name: 'dental1.jpg', path: 'images/clinics/dental1.jpg', folder: '医务室' }
    ],
    offices: [
        { name: 'office1.jpg', path: 'images/offices/office1.jpg', folder: '营业厅' }
    ],
    swimming: [
        { name: 'pool1.jpg', path: 'images/swimming/pool1.jpg', folder: '游泳馆' }
    ],
    others: [
        { name: 'gym1.jpg', path: 'images/others/gym1.jpg', folder: '其他' },
        { name: 'delivery1.jpg', path: 'images/others/delivery1.jpg', folder: '其他' },
        { name: 'library1.jpg', path: 'images/others/library1.jpg', folder: '其他' },
        { name: 'barbershop1.jpg', path: 'images/others/barbershop1.jpg', folder: '其他' }
    ]
};

// 文件夹名称映射
const folderNames = {
    all: '全部文件',
    restaurants: '餐厅',
    supermarkets: '超市',
    clinics: '医务室',
    offices: '营业厅',
    swimming: '游泳馆',
    others: '其他'
};

// ======================== 全局状态 ========================
// 购物车数据
let cart = [];
// 当前选中的餐厅ID
let currentRestaurant = 1;
// 当前菜单标签
let currentMenuTab = 'recommend';
// 轮播定时器
let sliderTimer = null;
// 当前轮播索引
let currentSlide = 0;
// 当前文件视图模式（grid/list）
let currentViewMode = 'grid';
// 当前预约的商家ID
let currentAppointmentId = null;

// ======================== 4. 导航功能 ========================
// 滚动高亮、移动端菜单、平滑滚动

// 初始化导航
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('section[id]');

    // 滚动时更新导航高亮
    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(function (section) {
            var sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });

        // 导航栏滚动阴影效果
        var navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// 移动端菜单切换
function toggleMenu() {
    var navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// 平滑滚动到指定区域
function scrollToSection(sectionId) {
    var target = document.getElementById(sectionId);
    if (target) {
        var offsetTop = target.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        // 关闭移动端菜单
        var navMenu = document.querySelector('.nav-menu');
        navMenu.classList.remove('active');
    }
}

// 初始化平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// ======================== 5. 轮播功能 ========================
// 自动轮播、手动切换

function initSlider() {
    var slides = document.querySelectorAll('.slide');
    var dots = document.querySelectorAll('.dot');
    if (slides.length === 0) return;

    // 自动轮播，每5秒切换
    sliderTimer = setInterval(function () {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }, 5000);
}

// 跳转到指定轮播
function goToSlide(index) {
    var slides = document.querySelectorAll('.slide');
    var dots = document.querySelectorAll('.dot');

    slides.forEach(function (slide, i) {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === index);
    });

    currentSlide = index;

    // 重置自动轮播计时器
    clearInterval(sliderTimer);
    sliderTimer = setInterval(function () {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }, 5000);
}

// ======================== 6. 分类筛选 ========================
// 商家卡片按类别筛选

function initCategoryFilter() {
    var filterBtns = document.querySelectorAll('.filter-btn');
    var merchantCards = document.querySelectorAll('.merchant-card');

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var category = this.getAttribute('data-category');

            // 更新按钮激活状态
            filterBtns.forEach(function (b) {
                b.classList.remove('active');
            });
            this.classList.add('active');

            // 筛选商家卡片
            merchantCards.forEach(function (card) {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = '';
                    card.style.animation = 'fadeIn 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ======================== 7. 搜索功能 ========================
// 实时搜索商家名称和类型

function handleSearch(keyword) {
    var searchPanel = document.getElementById('searchResults');
    var searchList = document.getElementById('searchResultsList');

    // 清除之前的搜索计时器
    clearTimeout(handleSearch._timer);
    handleSearch._timer = setTimeout(function () {
        keyword = keyword.trim().toLowerCase();

        // 空关键词时隐藏搜索面板
        if (!keyword) {
            searchPanel.classList.remove('active');
            return;
        }

        // 在商家数据中搜索
        var results = merchantsData.filter(function (m) {
            return m.name.toLowerCase().includes(keyword) ||
                m.typeLabel.toLowerCase().includes(keyword) ||
                m.description.toLowerCase().includes(keyword) ||
                m.type.toLowerCase().includes(keyword);
        });

        // 渲染搜索结果
        if (results.length === 0) {
            searchList.innerHTML = '<div class="search-no-result">未找到相关商家</div>';
        } else {
            searchList.innerHTML = results.map(function (m) {
                return '<div class="search-result-item" onclick="closeSearch(); openDetail(' + m.id + ')">' +
                    '<img src="' + m.image + '" alt="' + m.name + '">' +
                    '<div class="search-result-info">' +
                    '<p class="search-result-name">' + m.name + '</p>' +
                    '<p class="search-result-type">' + m.typeLabel + ' · ' + m.avgPrice + '</p>' +
                    '</div>' +
                    '<span class="search-result-rating">⭐ ' + m.rating + '</span>' +
                    '</div>';
            }).join('');
        }

        // 显示搜索面板
        searchPanel.classList.add('active');
    }, 300); // 300ms防抖
}

// 关闭搜索面板
function closeSearch() {
    var searchPanel = document.getElementById('searchResults');
    var searchInput = document.getElementById('searchInput');
    searchPanel.classList.remove('active');
    searchInput.value = '';
}

// ======================== 8. 通知面板 ========================
// 切换显示/隐藏、标记已读

function toggleNotifications() {
    var panel = document.getElementById('notifPanel');
    var userPanel = document.getElementById('userPanel');

    // 关闭用户菜单（避免同时打开）
    userPanel.classList.remove('active');

    // 切换通知面板
    panel.classList.toggle('active');
}

// 全部标记已读
function clearNotifications() {
    var items = document.querySelectorAll('.notif-item');
    items.forEach(function (item) {
        item.classList.remove('unread');
    });

    // 清除徽章数字
    var badge = document.querySelector('.btn-icon .badge');
    if (badge) {
        badge.style.display = 'none';
    }

    // 1.5秒后自动关闭面板
    setTimeout(function () {
        var panel = document.getElementById('notifPanel');
        panel.classList.remove('active');
    }, 1500);
}

// ======================== 9. 用户菜单 ========================
// 切换显示/隐藏

function toggleUserMenu() {
    var panel = document.getElementById('userPanel');
    var notifPanel = document.getElementById('notifPanel');

    // 关闭通知面板（避免同时打开）
    notifPanel.classList.remove('active');

    // 切换用户菜单
    panel.classList.toggle('active');
}

// 用户菜单子功能（占位提示）
function showMyOrders() {
    showSuccess('我的订单', '您目前没有进行中的订单');
}

function showMyAppointments() {
    showSuccess('我的预约', '您目前没有待处理的预约');
}

function showFavorites() {
    showSuccess('我的收藏', '收藏功能即将上线，敬请期待');
}

function showSettings() {
    showSuccess('设置', '系统设置功能即将上线');
}

// 点击页面空白处关闭面板
document.addEventListener('click', function (e) {
    var notifPanel = document.getElementById('notifPanel');
    var userPanel = document.getElementById('userPanel');
    var searchPanel = document.getElementById('searchResults');

    // 如果点击的不是通知按钮或面板内部，关闭通知面板
    if (!e.target.closest('.btn-icon[onclick*="toggleNotifications"]') && !e.target.closest('#notifPanel')) {
        notifPanel.classList.remove('active');
    }

    // 如果点击的不是用户按钮或面板内部，关闭用户菜单
    if (!e.target.closest('.btn-icon[onclick*="toggleUserMenu"]') && !e.target.closest('#userPanel')) {
        userPanel.classList.remove('active');
    }

    // 如果点击的不是搜索框或搜索面板内部，关闭搜索面板
    if (!e.target.closest('.nav-search') && !e.target.closest('#searchResults')) {
        searchPanel.classList.remove('active');
    }
});

// ======================== 10. 商家详情模态框 ========================
// openDetail(id) 显示商家完整信息

function openDetail(id) {
    var merchant = merchantsData.find(function (m) { return m.id === id; });
    if (!merchant) return;

    var titleEl = document.getElementById('detailTitle');
    var bodyEl = document.getElementById('detailBody');
    var footerEl = document.getElementById('detailFooter');

    // 设置标题
    titleEl.textContent = merchant.name + ' - 商家详情';

    // 构建详情内容
    var starsHtml = '';
    for (var i = 0; i < 5; i++) {
        starsHtml += i < Math.floor(merchant.rating) ? '★' : '☆';
    }

    var reviewsHtml = merchant.reviews.map(function (r) {
        var rStars = '';
        for (var j = 0; j < 5; j++) {
            rStars += j < r.rating ? '★' : '☆';
        }
        return '<div class="review-item">' +
            '<div class="review-header">' +
            '<span class="review-user">' + r.user + '</span>' +
            '<span class="review-stars">' + rStars + '</span>' +
            '</div>' +
            '<p class="review-text">' + r.text + '</p>' +
            '</div>';
    }).join('');

    bodyEl.innerHTML =
        '<div class="detail-hero">' +
        '<img src="' + merchant.image + '" alt="' + merchant.name + '">' +
        '</div>' +
        '<div class="detail-info">' +
        '<h3>' + merchant.name + '</h3>' +
        '<div class="detail-rating">' +
        '<span class="rating-stars">' + starsHtml + '</span>' +
        '<span class="rating-num">' + merchant.rating + '</span>' +
        '<span class="rating-count">（' + merchant.reviewCount + '条评价）</span>' +
        '</div>' +
        '<div class="detail-meta">' +
        '<p>📍 ' + merchant.address + '</p>' +
        '<p>📞 ' + merchant.phone + '</p>' +
        '<p>🕐 营业时间：' + merchant.hours + '</p>' +
        '<p>💰 ' + merchant.avgPrice + '</p>' +
        '</div>' +
        '<div class="detail-desc">' +
        '<h4>商家介绍</h4>' +
        '<p>' + merchant.description + '</p>' +
        '</div>' +
        '<div class="detail-services">' +
        '<h4>服务项目</h4>' +
        '<div class="services-list">' +
        merchant.services.map(function (s) {
            return '<span class="service-tag">' + s + '</span>';
        }).join('') +
        '</div>' +
        '</div>' +
        '<div class="detail-tags">' +
        merchant.tags.map(function (t) {
            return '<span class="tag">' + t + '</span>';
        }).join('') +
        '</div>' +
        '<div class="detail-reviews">' +
        '<h4>用户评价</h4>' +
        reviewsHtml +
        '</div>' +
        '</div>';

    // 构建底部按钮
    var isRestaurant = merchant.type === 'restaurant';
    var canAppointment = merchant.tags.some(function (t) {
        return t === '可预约' || t === '可预订' || t === '座位预约';
    });

    var footerHtml = '<button class="btn btn-outline" onclick="window.open(\'tel:' + merchant.phone + '\')">📞 拨打电话</button>';

    if (isRestaurant) {
        footerHtml += '<button class="btn btn-primary" onclick="closeModal(\'detailModal\'); openOrder(' + merchant.id + ')">🍔 立即订餐</button>';
    } else if (canAppointment) {
        footerHtml += '<button class="btn btn-primary" onclick="closeModal(\'detailModal\'); openAppointment(' + merchant.id + ')">📅 立即预约</button>';
    }

    footerEl.innerHTML = footerHtml;

    // 打开模态框
    openModal('detailModal');
}

// ======================== 11. 预约功能 ========================
// openAppointment(id) 打开预约表单

function openAppointment(id) {
    var merchant = merchantsData.find(function (m) { return m.id === id; });
    if (!merchant) return;

    currentAppointmentId = id;

    // 设置预约标题
    var titleEl = document.getElementById('appointTitle');
    titleEl.textContent = '预约 - ' + merchant.name;

    // 设置日期最小值为今天
    var dateInput = document.getElementById('appointDate');
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var dd = String(today.getDate()).padStart(2, '0');
    dateInput.min = yyyy + '-' + mm + '-' + dd;
    dateInput.value = yyyy + '-' + mm + '-' + dd;

    // 重置表单其他字段
    document.getElementById('appointTime').value = '';
    var textarea = document.querySelector('#appointmentForm textarea');
    if (textarea) textarea.value = '';

    // 打开模态框
    openModal('appointmentModal');
}

// 提交预约
function submitAppointment() {
    var dateInput = document.getElementById('appointDate');
    var timeSelect = document.getElementById('appointTime');

    // 表单验证
    if (!dateInput.value) {
        alert('请选择预约日期');
        return;
    }
    if (!timeSelect.value) {
        alert('请选择预约时段');
        return;
    }

    var merchant = merchantsData.find(function (m) { return m.id === currentAppointmentId; });

    // 关闭预约模态框
    closeModal('appointmentModal');

    // 显示成功提示
    showSuccess(
        '预约成功',
        '您已成功预约 ' + (merchant ? merchant.name : '服务') + '，日期：' + dateInput.value + '，时段：' + timeSelect.value
    );
}

// ======================== 12. 在线订餐系统 ========================
// 完整购物车逻辑

// 选择餐厅
function selectRestaurant(id) {
    currentRestaurant = id;
    currentMenuTab = 'recommend';

    // 更新侧边栏选中状态
    var items = document.querySelectorAll('.restaurant-item');
    items.forEach(function (item) {
        item.classList.toggle('active', parseInt(item.getAttribute('data-restaurant')) === id);
    });

    // 更新菜单标题
    var restaurant = menuData[id];
    if (restaurant) {
        document.getElementById('menuTitle').textContent = restaurant.name + ' · 菜单';
    }

    // 重置菜单标签
    var tabs = document.querySelectorAll('.menu-tab');
    tabs.forEach(function (tab, i) {
        tab.classList.toggle('active', i === 0);
    });

    // 渲染菜单
    renderMenu();
}

// 切换菜单分类标签
function switchMenuTab(el, tab) {
    currentMenuTab = tab;

    // 更新标签激活状态
    var tabs = document.querySelectorAll('.menu-tab');
    tabs.forEach(function (t) {
        t.classList.remove('active');
    });
    el.classList.add('active');

    // 渲染对应分类的菜单
    renderMenu();
}

// 渲染菜单内容
function renderMenu() {
    var grid = document.getElementById('menuGrid');
    var restaurant = menuData[currentRestaurant];

    if (!restaurant) {
        grid.innerHTML = '<div class="menu-empty">请选择餐厅</div>';
        return;
    }

    var items = restaurant[currentMenuTab] || [];
    if (items.length === 0) {
        grid.innerHTML = '<div class="menu-empty">该分类暂无菜品</div>';
        return;
    }

    grid.innerHTML = items.map(function (item) {
        // 检查购物车中该菜品的数量
        var cartItem = cart.find(function (c) { return c.id === item.id; });
        var qty = cartItem ? cartItem.qty : 0;

        return '<div class="menu-item" data-id="' + item.id + '">' +
            '<div class="menu-item-emoji">' + item.emoji + '</div>' +
            '<div class="menu-item-info">' +
            '<h4>' + item.name + '</h4>' +
            '<p class="menu-item-desc">' + item.desc + '</p>' +
            '<div class="menu-item-bottom">' +
            '<span class="menu-item-price">¥' + item.price.toFixed(2) + '</span>' +
            '<div class="menu-item-actions">' +
            (qty > 0 ?
                '<button class="btn-qty btn-minus" onclick="removeFromCart(' + item.id + ')">-</button>' +
                '<span class="qty-num">' + qty + '</span>' +
                '<button class="btn-qty btn-plus" onclick="addToCart(' + item.id + ')">+</button>'
                :
                '<button class="btn-add-cart" onclick="addToCart(' + item.id + ')">加入购物车</button>'
            ) +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
    }).join('');
}

// 添加到购物车
function addToCart(itemId) {
    var existing = cart.find(function (c) { return c.id === itemId; });
    if (existing) {
        existing.qty += 1;
    } else {
        // 从菜单数据中查找菜品信息
        var itemInfo = findMenuItem(itemId);
        if (itemInfo) {
            cart.push({
                id: itemId,
                name: itemInfo.name,
                price: itemInfo.price,
                emoji: itemInfo.emoji,
                qty: 1
            });
        }
    }
    updateCart();
    renderMenu();
}

// 从购物车移除
function removeFromCart(itemId) {
    var existing = cart.find(function (c) { return c.id === itemId; });
    if (existing) {
        if (existing.qty > 1) {
            existing.qty -= 1;
        } else {
            // 数量为1时移除
            cart = cart.filter(function (c) { return c.id !== itemId; });
        }
    }
    updateCart();
    renderMenu();
}

// 更新购物车显示
function updateCart() {
    var cartItemsEl = document.getElementById('cartItems');
    var cartCountEl = document.getElementById('cartCount');
    var totalPriceEl = document.getElementById('totalPrice');

    var totalQty = 0;
    var totalPrice = 0;

    cart.forEach(function (item) {
        totalQty += item.qty;
        totalPrice += item.price * item.qty;
    });

    // 更新购物车数量徽章
    cartCountEl.textContent = totalQty;

    // 更新总价
    totalPriceEl.textContent = '¥' + totalPrice.toFixed(2);

    // 渲染购物车列表
    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<div class="cart-empty">还没有选择菜品哦~</div>';
        return;
    }

    cartItemsEl.innerHTML = cart.map(function (item) {
        return '<div class="cart-item">' +
            '<div class="cart-item-info">' +
            '<span class="cart-item-emoji">' + item.emoji + '</span>' +
            '<span class="cart-item-name">' + item.name + '</span>' +
            '</div>' +
            '<div class="cart-item-qty">' +
            '<button class="btn-qty btn-minus" onclick="removeFromCart(' + item.id + ')">-</button>' +
            '<span class="qty-num">' + item.qty + '</span>' +
            '<button class="btn-qty btn-plus" onclick="addToCart(' + item.id + ')">+</button>' +
            '</div>' +
            '<span class="cart-item-price">¥' + (item.price * item.qty).toFixed(2) + '</span>' +
            '</div>';
    }).join('');
}

// 提交订单
function submitOrder() {
    if (cart.length === 0) {
        alert('购物车是空的，请先选择菜品');
        return;
    }

    var restaurant = menuData[currentRestaurant];
    var restaurantName = restaurant ? restaurant.name : '餐厅';

    // 计算总价
    var totalPrice = 0;
    cart.forEach(function (item) {
        totalPrice += item.price * item.qty;
    });

    // 清空购物车
    cart = [];
    updateCart();
    renderMenu();

    // 显示成功提示
    showSuccess(
        '下单成功',
        '您在 ' + restaurantName + ' 的订单已提交成功！合计 ¥' + totalPrice.toFixed(2) + '，请耐心等待取餐通知。'
    );
}

// 辅助函数：在菜单数据中查找菜品
function findMenuItem(itemId) {
    var restaurant = menuData[currentRestaurant];
    if (!restaurant) return null;

    var categories = ['recommend', 'set', 'single', 'drink'];
    for (var i = 0; i < categories.length; i++) {
        var items = restaurant[categories[i]];
        if (items) {
            var found = items.find(function (item) { return item.id === itemId; });
            if (found) return found;
        }
    }
    return null;
}

// 快捷入口：从商家卡片直接订餐
function openOrder(id) {
    // 滚动到订餐区域
    scrollToSection('order');

    // 延迟选择餐厅（等滚动完成）
    setTimeout(function () {
        selectRestaurant(id);
    }, 500);
}

// ======================== 13. 目录浏览 ========================
// loadFolder()、toggleView() 文件管理器功能

// 加载文件夹内容
function loadFolder(folder) {
    var files = fileData[folder] || [];
    var fileGrid = document.getElementById('fileGrid');
    var currentPath = document.getElementById('currentPath');
    var fileCount = document.getElementById('fileCount');

    // 更新文件夹选中状态
    var folderItems = document.querySelectorAll('.folder-item');
    folderItems.forEach(function (item) {
        item.classList.toggle('active', item.getAttribute('data-folder') === folder);
    });

    // 清空文件网格
    fileGrid.innerHTML = '';

    // 根据当前视图模式设置class
    fileGrid.className = currentViewMode === 'grid' ? 'file-grid' : 'file-grid file-list-view';

    // 渲染文件项
    files.forEach(function (file) {
        var fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML =
            '<div class="file-thumb">' +
            '<img src="' + file.path + '" alt="' + file.name + '" loading="lazy">' +
            '</div>' +
            '<div class="file-name">' + file.name + '</div>';
        // 点击图片放大预览
        fileItem.addEventListener('click', function () {
            openImagePreview(file.path, file.name);
        });
        fileGrid.appendChild(fileItem);
    });

    // 更新路径和计数
    var folderName = folderNames[folder] || '全部文件';
    currentPath.textContent = '📁 图片资源 / ' + folderName;
    fileCount.textContent = '共 ' + files.length + ' 个文件';
}

// 切换视图模式（网格/列表）
function toggleView() {
    currentViewMode = currentViewMode === 'grid' ? 'list' : 'grid';
    var fileGrid = document.getElementById('fileGrid');

    if (currentViewMode === 'list') {
        fileGrid.classList.add('file-list-view');
    } else {
        fileGrid.classList.remove('file-list-view');
    }
}

// 初始化文件管理器
function initFileManager() {
    // 默认加载全部文件
    loadFolder('all');
}

// ======================== 14. 图片预览 ========================
// 点击图片放大查看

function openImagePreview(src, caption) {
    var modalImg = document.getElementById('modalImage');
    var modalCaption = document.getElementById('modalCaption');

    modalImg.src = src;
    modalCaption.textContent = caption || '';

    openModal('imageModal');
}

// ======================== 15. 模态框管理 ========================
// openModal/closeModal 通用函数

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        // 禁止背景滚动
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        // 恢复背景滚动
        document.body.style.overflow = '';
    }
}

// ESC键关闭所有模态框
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        var modals = document.querySelectorAll('.modal.active');
        modals.forEach(function (modal) {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
});

// 点击模态框遮罩层关闭
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal') && e.target.classList.contains('active')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ======================== 16. 成功提示 ========================
// showSuccess(title, msg)

function showSuccess(title, msg) {
    var titleEl = document.getElementById('successTitle');
    var msgEl = document.getElementById('successMsg');

    titleEl.textContent = title || '操作成功';
    msgEl.textContent = msg || '操作已完成';

    openModal('successModal');
}

// ======================== 17. 快捷入口 ========================
// openServiceByCategory() 跳转到对应分类

function openServiceByCategory(category) {
    // 滚动到商家服务区域
    scrollToSection('merchants');

    // 延迟激活对应分类筛选按钮
    setTimeout(function () {
        var filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(function (btn) {
            var btnCategory = btn.getAttribute('data-category');
            // 匹配分类（支持模糊匹配，如 clinic 匹配 clinic）
            if (btnCategory === category) {
                btn.click();
            } else if (category === 'restaurant' && btnCategory === 'restaurant') {
                btn.click();
            } else if (category === 'supermarket' && btnCategory === 'supermarket') {
                btn.click();
            } else if (category === 'office' && btnCategory === 'office') {
                btn.click();
            } else if (category === 'swimming' && btnCategory === 'swimming') {
                btn.click();
            } else if (category === 'others' && btnCategory === 'others') {
                btn.click();
            }
        });
    }, 500);
}

// ======================== 18. 页面加载动画 ========================

function initPageAnimation() {
    // 页面加载时的淡入效果
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    window.addEventListener('load', function () {
        setTimeout(function () {
            document.body.style.opacity = '1';
        }, 100);
    });
}

// ======================== 初始化入口 ========================
document.addEventListener('DOMContentLoaded', function () {
    // 初始化各功能模块
    initNavigation();          // 导航功能
    initSmoothScroll();       // 平滑滚动
    initSlider();             // 轮播功能
    initCategoryFilter();     // 分类筛选
    initFileManager();        // 文件管理器
    initPageAnimation();      // 页面加载动画

    // 初始化在线订餐系统
    selectRestaurant(1);     // 默认选中第一个餐厅
    updateCart();              // 初始化购物车显示

    // 商家卡片点击事件（点击卡片本身打开详情）
    var merchantCards = document.querySelectorAll('.merchant-card');
    merchantCards.forEach(function (card) {
        card.addEventListener('click', function () {
            var id = parseInt(this.getAttribute('data-id'));
            if (id) {
                openDetail(id);
            }
        });
    });
});
