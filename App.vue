<!-- @format -->

<template>
  <div>
    <div style="height: 150px; background: #fafafa"></div>
    <imc-condition-popover id="conditionPopover"></imc-condition-popover>

    <button @click="addTag">添加标签</button>
    <button @click="getValue">获取标签值</button>
  </div>
</template>

<script>
import {ref, defineComponent, onMounted} from 'vue'

export default defineComponent({
  setup() {
    const $setProps = (el, obj) => {
      const _el = document.querySelector(el)
      Object.assign(_el, obj)
    }

    onMounted(() => {
      $setProps('#conditionPopover', {
        tagParams: {
          maxMode: 'all',
          maxTagCount: 4
        },
        options: [
          {
            key: 'k-177550cb82788dfd488baff06b8e75af',
            label: '游戏平台',
            options: [
              {
                type: 'checkbox-group',
                key: 's_platform_id',
                placeholder: '请选择游戏平台',
                options: [
                  {label: 'Android', value: '1'},
                  {label: 'iOS', value: '2'},
                  {label: 'Amazon', value: '3'},
                  {label: 'WindowsPhone', value: '4'},
                  {label: 'Facebook', value: 5},
                  {label: 'IGG', value: '7'},
                  {label: '176', value: '9'},
                  {label: 'Steam', value: '11'},
                  {label: 'Huawei', value: '12'},
                  {label: 'Xiaomi', value: '13'},
                  {label: 'Oppo', value: '15'},
                  {label: 'Vivo', value: '16'},
                  {label: 'Tencent', value: '17'},
                  {label: 'TY', value: '19'},
                  {label: 'Aptoide', value: '90'},
                  {label: 'Other', value: '255'},
                ],
              },
            ],
          },
          {
            key: 'k-65d3ab7783152a7f2ff6cbe72d9688cf',
            label: '所在地区',
            options: [
              {type: 'input', key: 's_region', placeholder: '请输入地区简称'},
              {
                type: 'checkbox-group',
                key: 'select_region_tempate',
                options: [
                  {
                    label: 'EN',
                    value:
                      'A1,A2,O1,AD,AE,AF,AG,AI,AL,AO,AP,AQ,AS,AT,AU,AW,AX,BA,BB,BD,BG,BH,BI,BL,BM,BN,BQ,BS,BT,BV,BW,CA,CC,CD,CF,CG,CH,CI,CK,CU,CV,CW,CX,CY,CZ,DJ,DK,DM,DZ,EE,EG,EH,ER,ET,EU,FI,FJ,FK,FM,FO,GB,GD,GF,GG,GH,GI,GL,GM,GN,GP,GQ,GR,GS,GU,GW,GY,HM,HR,HU,IE,IL,IM,IN,IO,IQ,IR,IS,JE,JM,JO,KE,KH,KI,KM,KN,KP,KW,KY,LA,LB,LC,LK,LR,LS,LT,LV,LY,MA,MC,ME,MF,MG,MH,MK,MM,MN,MP,MQ,MR,MS,MT,MV,MW,MZ,NA,NC,NE,NF,NG,NL,NO,NP,NR,NU,NZ,OM,PF,PG,PH,PK,PL,PM,PN,PR,PS,PW,QA,RE,RO,RS,SA,SB,SC,SD,SE,SG,SH,SI,SJ,SK,SL,SM,SO,SR,SS,ST,SX,SY,SZ,TC,TD,TF,TK,TL,TN,TO,TT,TV,TZ,UG,UM,US,VA,VC,VG,VI,VU,WF,WS,YE,YT,ZA,ZM,ZW,ZZ',
                  },
                  {label: 'ES', value: 'AR,BO,BZ,CL,CO,CR,DO,EC,ES,GT,HN,MX,NI,PA,PE,PY,SV,UY,VE'},
                  {label: 'CN', value: 'CN'},
                  {label: 'RU', value: 'AM,AZ,BY,GE,KG,KZ,MD,RU,TJ,TM,UA,UZ'},
                  {label: 'TW', value: 'HK,MO,TW'},
                  {label: 'FR', value: 'BE,BF,BJ,CM,FR,GA,HT,LU,ML,MU,RW,SN,TG'},
                  {label: 'DE', value: 'AT,CH,DE'},
                  {label: 'PT', value: 'AO,BR,CV,GW,MZ,PT'},
                  {label: 'SEA', value: 'BN,ID,KH,LA,MM,MY,PH,SG,TH,VN'},
                  {label: 'KR', value: 'KR'},
                  {label: 'JP', value: 'JP'},
                  {label: 'ARB', value: 'AE,BH,BL,DJ,DZ,EG,IQ,JO,KM,KW,LB,LY,MA,MR,OM,PS,QA,SA,SD,SO,SY,TN,YE'},
                  {label: 'TR', value: 'TR'},
                  {label: 'IT', value: 'IT'},
                  {label: 'GCC6', value: 'AE,BH,KW,OM,QA,SA'},
                  {label: 'ARB T3', value: 'BL,DJ,DZ,EG,IQ,JO,KM,LB,LY,MA,MR,PS,SD,SO,SY,TN,YE'},
                  {label: 'ENT1', value: 'AU,CA,DK,FI,GB,NL,NO,NZ,SE,SG,US'},
                  {label: 'EURO', value: 'AT,BE,DE,DK,ES,FI,FR,GB,GR,IS,IT,LU,NL,NO,PL,PT,RO,SE,SZ'},
                  {label: 'ENT2', value: 'AT,BE,CX,CY,CZ,FJ,FM,GR,GU,IE,IL,IS,MC,MK,MT,MY,PL,ZA'},
                  {label: 'EN网红组', value: 'AU,CA,GB,IN,NL,PH,PK,SE,US,ZZ'},
                  {
                    label: 'T1',
                    value: 'AE,AU,BH,CA,CH,CN,DE,DK,ES,FI,FR,GB,HK,IT,JP,KR,KW,LI,MO,NL,NO,NZ,OM,PT,QA,SA,SE,SG,TW,US',
                  },
                  {
                    label: 'T2',
                    value:
                      'AL,AT,BA,BE,BG,BJ,BY,CL,CR,CY,CZ,EE,FJ,GP,GR,GU,HU,ID,IE,IL,IS,KZ,LA,LT,LU,LV,MC,ME,MK,MT,MU,MV,MY,NC,PE,PL,RO,RS,RU,SK,TH,TJ,TR,UA,VN,ZA',
                  },
                  {
                    label: 'T3',
                    value:
                      'AD,AF,AG,AI,AM,AO,AP,AQ,AR,AS,AW,AX,AZ,BB,BD,BF,BI,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BZ,CC,CD,CF,CG,CI,CK,CM,CO,CU,CV,CW,CX,DJ,DM,DO,DZ,EC,EG,EH,ER,ET,EU,FK,FM,FO,GA,GD,GE,GF,GG,GH,GI,GL,GM,GN,GQ,GS,GT,GW,GY,HM,HN,HR,HT,IM,IN,IO,IQ,IR,JE,JM,JO,KE,KG,KH,KI,KM,KN,KP,KY,LB,LC,LK,LR,LS,LY,MA,MD,MF,MG,MH,ML,MM,MN,MP,MQ,MR,MS,MW,MX,MZ,NA,NE,NF,NG,NI,NP,NR,NU,PA,PF,PG,PH,PK,PM,PN,PR,PS,PW,PY,RE,RW,SB,SC,SD,SH,SI,SJ,SL,SM,SN,SO,SR,SS,ST,SV,SX,SY,SZ,TC,TD,TF,TG,TK,TL,TM,TN,TO,TT,TV,TZ,UG,UM,UY,UZ,VA,VC,VE,VG,VI,VU,WF,WS,YE,YT,ZM,ZW,A1,A2,O1',
                  },
                  {
                    label: 'LA',
                    value: 'AG,AL,AO,AR,BB,BO,BR,BW,CL,CO,DM,EC,GD,GM,GY,KN,LC,MS,NA,PA,PE,PY,SZ,TT,UY,VC,VE,VG',
                  },
                ],
              },
            ],
          },
          {
            key: 'k-24ffad5f3ee10dfbd9ca57dc1949630c',
            label: '游戏语言',
            options: [
              {
                type: 'select-group',
                key: 's_lang_id',
                placeholder: '请选择游戏语言',
                options: [
                  {label: 'CN', value: 1},
                  {label: 'TW', value: 2},
                  {label: 'DE', value: 3},
                  {label: 'ARB', value: 4},
                  {label: 'EN', value: 5},
                  {label: 'ES', value: 6},
                  {label: 'PH', value: 7},
                  {label: 'FR', value: 8},
                  {label: 'ID', value: 9},
                  {label: 'IT', value: 10},
                  {label: 'JP', value: 11},
                  {label: 'KR', value: 12},
                  {label: 'MY', value: 13},
                  {label: 'PT', value: 14},
                  {label: 'RU', value: 15},
                  {label: 'TH', value: 16},
                  {label: 'TR', value: 17},
                  {label: 'VN', value: 18},
                  {label: 'UA', value: 19},
                  {label: 'CZ', value: 20},
                  {label: 'BG', value: 21},
                  {label: 'DK', value: 22},
                  {label: 'FI', value: 23},
                  {label: 'GR', value: 24},
                  {label: 'HU', value: 25},
                  {label: 'IR', value: 26},
                  {label: 'NL', value: 27},
                  {label: 'NO', value: 28},
                  {label: 'PL', value: 29},
                  {label: 'RO', value: 30},
                  {label: 'SE', value: 31},
                  {label: 'SK', value: 32},
                  {label: 'UR', value: 33},
                  {label: 'ES_CO', value: 34},
                  {label: 'IN', value: 35},
                  {label: 'BR', value: 36},
                  {label: 'HE', value: 37},
                  {label: 'PA_RIN', value: 38},
                  {label: 'PA_RPK', value: 39},
                ],
              },
            ],
          },
          {
            key: 'k-b8faadcac1552512d78cf10c48f7762c',
            label: '广告系列ID',
            options: [{type: 'input', key: 's_ad_keyword_id', placeholder: '请输入广告系列ID'}],
          },
          {
            key: 'k-30553a4dcb18c3d30e0d193851bf34eb',
            label: '广告类型',
            options: [
              {
                type: 'select-group',
                key: 'cpe_ad',
                placeholder: '请选择广告类型',
                options: [
                  {label: 'CPE', value: 1},
                  {label: '激励', value: 2},
                  {label: '非激励', value: 3},
                  {label: '网红', value: 4},
                  {label: '屏蔽CPE', value: -1},
                  {label: '屏蔽激励', value: -2},
                  {label: '屏蔽网红', value: -4},
                  {label: '屏蔽非激励', value: -3},
                ],
              },
            ],
          },
          {
            key: 'k-8ade788e6c0c364682bc7ee14be89249',
            label: 'ROI流水比例',
            options: [
              {
                type: 'select-group',
                key: 's_roi_rate',
                placeholder: '请选择ROI流水比例',
                options: [
                  {label: '100%', value: 1},
                  {label: '65%', value: '0.65'},
                ],
              },
            ],
          },
          {
            key: 'keyworld',
            label: '关键字',
            options: [
              {
                type: 'select-group',
                key: 's_akt_id',
                placeholder: '请选择关键字',
                options: [
                  {label: 'Abel', value: '88'},
                  {label: 'adbert', value: '58'},
                  {label: 'AOS', value: '30'},
                  {label: 'AppFlood', value: '21'},
                  {label: 'ArabicS', value: '52'},
                  {label: 'Arthur', value: '93'},
                  {label: 'Baidu', value: '96'},
                  {label: 'bluefocus', value: '43'},
                  {label: 'BlueStacks', value: '20'},
                  {label: 'Chance', value: '32'},
                  {label: 'clickkwala', value: '24'},
                  {label: 'Crystal', value: '61'},
                  {label: 'Cyber Agent', value: '25'},
                  {label: 'Cyberbull', value: '63'},
                  {label: 'Daphne', value: '46'},
                  {label: 'DauUp', value: '16'},
                  {label: 'Dave', value: '60'},
                  {label: 'dentsudigital', value: '50'},
                  {label: 'Ding', value: '91'},
                  {label: 'DMG', value: '28'},
                  {label: 'DMG', value: '36'},
                  {label: 'DMG', value: '37'},
                  {label: 'DMG', value: '39'},
                  {label: 'DMG(new)', value: '56'},
                  {label: 'Eugene', value: '57'},
                  {label: 'Facebook', value: '18'},
                  {label: 'facebook推广', value: '4'},
                  {label: 'Fannie', value: '74'},
                  {label: 'Fantasy', value: '72'},
                  {label: 'FB-post', value: '75'},
                  {label: 'Felix', value: '65'},
                  {label: 'Firemobo', value: '84'},
                  {label: 'FishIsle', value: '5'},
                  {label: 'Fred', value: '90'},
                  {label: 'Gamebau', value: '40'},
                  {label: 'Gordon', value: '89'},
                  {label: 'Gynethia', value: '69'},
                  {label: 'Himobi', value: '83'},
                  {label: 'Hongkongbrillia', value: '82'},
                  {label: 'Hotdog', value: 17},
                  {label: 'Huntmobi', value: 81},
                  {label: 'Instagram', value: 23},
                  {label: 'Jenny', value: 77},
                  {label: 'Johnny', value: 78},
                  {label: 'Kamal', value: 34},
                  {label: 'Katya', value: 49},
                  {label: 'Lion', value: 73},
                  {label: 'Lizzy', value: 79},
                  {label: 'Lootcackes', value: 67},
                  {label: 'Lorna', value: 70},
                  {label: 'Madhouse-inc', value: 98},
                  {label: 'mail.ru', value: 12},
                  {label: 'Mansh', value: 68},
                  {label: 'Marco', value: 27},
                  {label: 'Megan', value: 76},
                  {label: 'menamobile', value: 47},
                  {label: 'MEX', value: 42},
                  {label: 'Michael', value: 41},
                  {label: 'Mobidays', value: 38},
                  {label: 'MTDEntertainment', value: 53},
                  {label: 'Nanigans', value: 14},
                  {label: 'Nathan', value: 87},
                  {label: 'Nick', value: 62},
                  {label: 'Olya', value: 92},
                  {label: 'OPT', value: 45},
                  {label: 'sdkbox', value: 48},
                  {label: 'Septeni', value: 26},
                  {label: 'Sino', value: 95},
                  {label: 'SkyFall', value: 66},
                  {label: 'Socialclicks', value: 15},
                  {label: 'softworld', value: 51},
                  {label: 'Sprinklr', value: 80},
                  {label: 'Tapcash', value: 29},
                  {label: 'Tiffany', value: 64},
                  {label: 'TW自投', value: 54},
                  {label: 'Ukagency', value: 71},
                  {label: 'urAd', value: 33},
                  {label: 'Vadim', value: 31},
                  {label: 'Webeye', value: 85},
                  {label: 'wezonet', value: 55},
                  {label: 'Winnie', value: 86},
                  {label: 'YeahMobi', value: 19},
                  {label: 'Yoyo', value: 94},
                  {label: 'ysadagent', value: 59},
                  {label: 'Yumo', value: 97},
                  {label: 'ZoomIn', value: 35},
                  {label: '外部关键词', value: 13},
                  {label: '好友推荐', value: 10},
                  {label: '自由激活', value: 11},
                ],
              },
            ],
          },
          {
            key: 'k-cb30836bf2d744c7205a12a797a1c559',
            label: '关键字搜索',
            options: [
              {
                type: 'select-group',
                key: 's_ad_keyword_match',
                placeholder: '请选择搜索方式',
                options: [
                  {label: '匹配', value: '1'},
                  {label: '屏蔽', value: '2'},
                ],
              },
              {type: 'input', key: 's_ad_keyword', placeholder: '请输入关键字'},
            ],
          },
          {
            key: 'k-2dcb08f2b0a06693c9dfab5eb4a4d3d4',
            label: '屏蔽渠道',
            options: [
              {type: 'input', key: 's_skip_channel', placeholder: '请输入渠道ID'},
              {
                type: 'select-group',
                key: 'mask_zero_cost_channel',
                placeholder: '屏蔽0成本渠道',
                options: [{label: '屏蔽0成本渠道', value: '1'}],
              },
            ],
          },
          {
            key: 'k-c1b7f48cfca9aed76a524a176be64ad1',
            label: '屏蔽地区',
            options: [
              {type: 'input', key: 's_skip_region', placeholder: '请输入地区简称'},
              {
                type: 'checkbox-group',
                key: 'select_skip_region_tempate',
                options: [
                  {
                    label: 'EN',
                    value:
                      'A1,A2,O1,AD,AE,AF,AG,AI,AL,AO,AP,AQ,AS,AT,AU,AW,AX,BA,BB,BD,BG,BH,BI,BL,BM,BN,BQ,BS,BT,BV,BW,CA,CC,CD,CF,CG,CH,CI,CK,CU,CV,CW,CX,CY,CZ,DJ,DK,DM,DZ,EE,EG,EH,ER,ET,EU,FI,FJ,FK,FM,FO,GB,GD,GF,GG,GH,GI,GL,GM,GN,GP,GQ,GR,GS,GU,GW,GY,HM,HR,HU,IE,IL,IM,IN,IO,IQ,IR,IS,JE,JM,JO,KE,KH,KI,KM,KN,KP,KW,KY,LA,LB,LC,LK,LR,LS,LT,LV,LY,MA,MC,ME,MF,MG,MH,MK,MM,MN,MP,MQ,MR,MS,MT,MV,MW,MZ,NA,NC,NE,NF,NG,NL,NO,NP,NR,NU,NZ,OM,PF,PG,PH,PK,PL,PM,PN,PR,PS,PW,QA,RE,RO,RS,SA,SB,SC,SD,SE,SG,SH,SI,SJ,SK,SL,SM,SO,SR,SS,ST,SX,SY,SZ,TC,TD,TF,TK,TL,TN,TO,TT,TV,TZ,UG,UM,US,VA,VC,VG,VI,VU,WF,WS,YE,YT,ZA,ZM,ZW,ZZ',
                  },
                  {label: 'ES', value: 'AR,BO,BZ,CL,CO,CR,DO,EC,ES,GT,HN,MX,NI,PA,PE,PY,SV,UY,VE'},
                  {label: 'CN', value: 'CN'},
                  {label: 'RU', value: 'AM,AZ,BY,GE,KG,KZ,MD,RU,TJ,TM,UA,UZ'},
                  {label: 'TW', value: 'HK,MO,TW'},
                  {label: 'FR', value: 'BE,BF,BJ,CM,FR,GA,HT,LU,ML,MU,RW,SN,TG'},
                  {label: 'DE', value: 'AT,CH,DE'},
                  {label: 'PT', value: 'AO,BR,CV,GW,MZ,PT'},
                  {label: 'SEA', value: 'BN,ID,KH,LA,MM,MY,PH,SG,TH,VN'},
                  {label: 'KR', value: 'KR'},
                  {label: 'JP', value: 'JP'},
                  {label: 'ARB', value: 'AE,BH,BL,DJ,DZ,EG,IQ,JO,KM,KW,LB,LY,MA,MR,OM,PS,QA,SA,SD,SO,SY,TN,YE'},
                  {label: 'TR', value: 'TR'},
                  {label: 'IT', value: 'IT'},
                  {label: 'GCC6', value: 'AE,BH,KW,OM,QA,SA'},
                  {label: 'ARB T3', value: 'BL,DJ,DZ,EG,IQ,JO,KM,LB,LY,MA,MR,PS,SD,SO,SY,TN,YE'},
                  {label: 'ENT1', value: 'AU,CA,DK,FI,GB,NL,NO,NZ,SE,SG,US'},
                  {label: 'EURO', value: 'AT,BE,DE,DK,ES,FI,FR,GB,GR,IS,IT,LU,NL,NO,PL,PT,RO,SE,SZ'},
                  {label: 'ENT2', value: 'AT,BE,CX,CY,CZ,FJ,FM,GR,GU,IE,IL,IS,MC,MK,MT,MY,PL,ZA'},
                  {label: 'EN网红组', value: 'AU,CA,GB,IN,NL,PH,PK,SE,US,ZZ'},
                  {
                    label: 'T1',
                    value: 'AE,AU,BH,CA,CH,CN,DE,DK,ES,FI,FR,GB,HK,IT,JP,KR,KW,LI,MO,NL,NO,NZ,OM,PT,QA,SA,SE,SG,TW,US',
                  },
                  {
                    label: 'T2',
                    value:
                      'AL,AT,BA,BE,BG,BJ,BY,CL,CR,CY,CZ,EE,FJ,GP,GR,GU,HU,ID,IE,IL,IS,KZ,LA,LT,LU,LV,MC,ME,MK,MT,MU,MV,MY,NC,PE,PL,RO,RS,RU,SK,TH,TJ,TR,UA,VN,ZA',
                  },
                  {
                    label: 'T3',
                    value:
                      'AD,AF,AG,AI,AM,AO,AP,AQ,AR,AS,AW,AX,AZ,BB,BD,BF,BI,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BZ,CC,CD,CF,CG,CI,CK,CM,CO,CU,CV,CW,CX,DJ,DM,DO,DZ,EC,EG,EH,ER,ET,EU,FK,FM,FO,GA,GD,GE,GF,GG,GH,GI,GL,GM,GN,GQ,GS,GT,GW,GY,HM,HN,HR,HT,IM,IN,IO,IQ,IR,JE,JM,JO,KE,KG,KH,KI,KM,KN,KP,KY,LB,LC,LK,LR,LS,LY,MA,MD,MF,MG,MH,ML,MM,MN,MP,MQ,MR,MS,MW,MX,MZ,NA,NE,NF,NG,NI,NP,NR,NU,PA,PF,PG,PH,PK,PM,PN,PR,PS,PW,PY,RE,RW,SB,SC,SD,SH,SI,SJ,SL,SM,SN,SO,SR,SS,ST,SV,SX,SY,SZ,TC,TD,TF,TG,TK,TL,TM,TN,TO,TT,TV,TZ,UG,UM,UY,UZ,VA,VC,VE,VG,VI,VU,WF,WS,YE,YT,ZM,ZW,A1,A2,O1',
                  },
                  {
                    label: 'LA',
                    value: 'AG,AL,AO,AR,BB,BO,BR,BW,CL,CO,DM,EC,GD,GM,GY,KN,LC,MS,NA,PA,PE,PY,SZ,TT,UY,VC,VE,VG',
                  },
                ],
              },
            ],
          },
        ],
      })
      const $fn = el => {
        const _el = document.querySelector(el)
        return _el._instance?.exposed
      }
      const popover = document.querySelector('#conditionPopover')
      popover?.addEventListener('change', e => {
        if (e.detail[2].key === 'k-65d3ab7783152a7f2ff6cbe72d9688cf') {
          // const val = e.detail[0].join(',')
          // $fn('#conditionPopover').updateOptions('k-65d3ab7783152a7f2ff6cbe72d9688cf', [
          //   {
          //     key: 's_region',
          //     value: val,
          //   },
          // ])
        }
      })
    })

    const $fn = el => {
      const _el = document.querySelector(el)
      return _el._instance?.exposed
    }

    const addTag = () => {
      $fn('#conditionPopover').updateOptions('k-177550cb82788dfd488baff06b8e75af', [
        {key: 's_platform_id', value: ['1']},
      ])
    }

    const getValue = () => {
      console.log($fn('#conditionPopover').getTagsValue())
    }

    return {
      addTag,
      getValue,
    }
  },
})
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
</style>
