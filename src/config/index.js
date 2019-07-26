/**
 * @description 系统全局配置
 */
export default {
    /**
     * @description 记住密码状态下的token在Cookie中存储的天数，默认1天
     */
    tokenCookieExpires: 1,
    /**
     * @description 记住密码状态下的密码在Cookie中存储的天数，默认1天
     */
    passCookieExpires: 1,
    /**
     * @description 此处修改网站名称
     */
    webName: 'eladmin',
    /**
     * @description 是否只保持一个子菜单的展开
     */
    uniqueOpened: true,
    /**
     * @description token key
     */
    TokenKey: 'EL-ADMIN-TOEKN',
  
    /**
     * @description 请求超时时间，毫秒（默认2分钟）
     */
    timeout: 1200000,
  
    /**
     * @description 是否显示 tagsView
     */
    tagsView: true,
  
    /**
     * @description 固定头部
     */
    fixedHeader: false,
  
    /**
     * @description 是否显示logo
     */
    sidebarLogo: true,
  
    /**
     * 是否显示设置的悬浮按钮
     */
    settingBtn: true,
    menuList: [
        {
            "title": "首页",
            "icon": "home",
            "path": "/admin/home"
        },
        // {
        //     "title": "商品",
        //     "icon": "shopping",
        //     "path": "/admin/catalogProduct",
        //     "children": [
        //         {
        //             "title": "品类管理",
        //             "icon": "home",
        //             "path": "/admin/catalog"
        //         },
        //         {
        //             "title": "商品管理",
        //             "icon": "home",
        //             "path": "/admin/product"
        //         }
        //     ]
        // },
        {
            "title": "UI组件",
            "icon": "shopping",
            "path": "/admin/ui",
            "children": [
                {
                    "title": "富文本编辑",
                    "icon": "shopping",
                    "path": "/admin/wysiwyg"
                }
            ]
        },
        {
            "title": "用户管理",
            "icon": "team",
            "path": "/admin/user"
        },
        {
            "title": "角色管理",
            "icon": "user",
            "path": "/admin/role"
        },
        {
            "title": "图表",
            "icon": "qrcode",
            "path": "/admin/pieline",
            "children": [
                {
                    "title": "echart1",
                    "icon": "home",
                    "path": "/admin/pie"
                },
                {
                    "title": "echart2",
                    "icon": "home",
                    "path": "/admin/line"
                }
            ]
        }
    ]
  }
  