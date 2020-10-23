
let cases = [

    //Feb 24-28
    [2, 0, 0], [23, 0, 0], [33, 0, 0], [33, 0, 0], [38, 0, 0],
    //Feb 29-Mar 04
    [41, 0, 0], [47, 0, 0], [49, 0, 0], [49, 0, 0], [51, 1, 0],
    //Mar 05-09
    [48, 4, 0], [38, 14, 0], [71, 14, 0], [71, 14, 0], [87, 22, 0],
    //Mar 10-15
    [159, 30, 0], [154, 35, 0], [162, 35, 0], [166, 44, 0], [154, 60, 0],
    //Mar 16-20
    [137, 77, 0], [147, 81, 1], [153, 88, 1], [160, 95, 1], [168, 110, 1],
    //Mar 20-24
    [172, 125, 1], [184, 125, 1], [183, 149, 2], [211, 164, 2], [212, 177, 3],
    //Mar 25-29
    [225, 190, 4], [244, 210, 4], [227, 235, 4], [207, 265, 4], [224, 272, 4],
    //Mar 30-Apr 3 
    [216, 295, 4], [247, 316, 4], [228, 337, 4], [258, 381, 4], [281, 388, 4],
    //Apr 4-8
    [261, 423, 4], [265, 431, 4], [294, 458, 4], [341, 465, 5], [341, 477, 5],
    //Apr 9-13
    [363, 519, 5], [380, 539, 6], [479, 555, 6], [572, 558, 6], [764, 591, 6],
    //Apr 14-18
    [873, 648, 7], [1003, 663, 7], [990, 703, 7], [1011, 726, 7], [1011, 755, 7],
    //Apr 19-23
    [1112, 762, 7], [1127, 773, 7], [1182, 784, 7], [994, 1026, 7], [1127, 1082, 8],
    //Apr 24-28
    [1397, 1113, 8], [1421, 1160, 8], [1450, 1189, 8], [1497, 1218, 8], [1493, 1310, 8],
    //Apr 29-May 3
    [1458, 1455, 8], [1532, 1500, 8], [1607, 1555, 8], [1708, 1568, 8], [1657, 1718, 8],
    //May 4-8
    [1781, 1744, 8], [1950, 1762, 8], [2066, 1860, 8], [2191, 2000, 8], [2408, 2028, 8],
    //May 9-13
    [2711, 2055, 8], [2863, 2070, 8], [3076, 2152, 8], [3330, 2192, 9], [3601, 2205, 10],
    //May 14-18
    [3835, 2353, 10], [3932, 2640, 11], [3973, 2762, 12], [4034, 2910, 12], [4241, 2931, 12],
    //May 19-23
    [4556, 2964, 12], [4308, 3568, 12], [4289, 3873, 12], [4306, 4096, 12], [4324, 4465, 13],
    //May 24-28
    [4538, 4587, 13], [4404, 4753, 14], [4414, 4938, 14], [4525, 5152, 15], [4618, 5419, 15],
    //May 29-JUN 2
    [4734, 5700, 15], [4950, 5826, 17], [4696, 6683, 19], [4776, 7076, 19], [4885, 7407, 19],
    //JUN 3-6
    [5385, 7410, 20], [5547, 7728, 21], [5228, 8585, 22], [5303, 9056, 24],
    //JUN 7-9
    /*[5269, 9468, 26],[5064, 10326, 27], [5096, 10606, 29],*/
    //Corrected JUN 7-8
    [5269 + 218, 9468, 26], [5064 + 314, 10326, 27],
    //JUN 9-13
    [5062, 11109, 29], [5148, 11487, 32], [5330, 11903, 36], [5486, 12191, 36], [5370, 12818, 39],
    //JUN 14
    [5304, 13197, 43, 18, 140, 425192],
    //JUN 15
    [5700, 13267, 46, 20, 135, 432409],
    //JUN 16
    [5640, 13866, 47, 27, 133, 438080],
    //JUN 17
    [5727, 14185, 49, 27, 131, 445669],
    //JUN 18
    [5679, 14696, 55, 29, 173, 454368],
    //JUN 19
    [5572, 15287, 57, 36, 174, 462627],
    //JUN 20
    [5481, 15790, 60, 33, 181, 470409],
    //JUN 21
    [5282, 16419, 63, 32, 169, 477788],
    //JUN 22
    [5480, 16862, 65, 37, 148, 485715],
    //JUN 23
    [5545, 17450, 67, 36, 117, 494028],
    //JUN 24
    [5525, 17977, 68, 38, 162, 502763],
    //JUN 25
    [5509, 18501, 71, 38, 136, 511458],
    //JUN 26
    [5595, 19137, 73, 48, 94, 521101],
    //JUN 27
    [5408, 19781, 78, 42, 78, 529242],
    //JUN 28
    [5105, 20517, 83, 41, 74, 536516],
    //JUN 29
    [5227, 20928, 84, 42, 79, 545125],
    //JUN 30
    [5340, 21331, 87, 50, 86, 554239],
    //JUL 01
    [5374, 21948, 92, 52, 84, 564365],
    //JUL 02
    [5160, 22583, 94, 51, 82, 574105],
    //JUL 03
    [4997, 23318, 95, 48, 58, 584070],
    //JUL 04
    [4802, 23959, 96, 46, 54, 592350],
    //JUL 05
    [4621, 24649, 97, 45, 53, 602151],
    //JUL 06
    [4545, 25178, 98, 54, 39, 612096],
    //JUL 07
    [4653, 25570, 98, 60, 58, 621362],
    //JUL 08
    [4760, 26073, 98, 56, 85, 630753],
    //JUL 09
    [4905, 26520, 103, 54, 82, 640219],
    //JUL 10
    [4722, 27213, 104, 53, 84, 649020],
    //JUL 11
    [4538, 27828, 104, 53, 83, 656659],
    //JUL 12
    [4408, 28425, 108, 47, 118, 666248],
    //JUL 13
    [4268, 29099, 109, 50, 72, 675451],
    //JUL 14
    [4214, 29753, 111, 51, 97, 685318],
    //JUL 15
    [4123, 30320, 117, 48, 113, 693539],
    //JUL 16
    [4154, 30809, 121, 48, 90, 703002],
    //JUL 17
    [4161, 31188, 124, 47, 82, 710686],
    //JUL 18
    [4115, 31765, 124, 51, 87, 717723],
    //JUL 19
    [3924, 32372, 126, 46, 70, 726140],
    //JUL 20
    [3843, 32965, 128, 46, 70, 735492],
    //JUL 21
    [3732, 33455, 129, 47, 90, 744694],
    //JUL 22
    [3613, 33894, 130, 47, 91, 752485],
    //JUL 23
    [3450, 34412, 134, 45, 92, 760733],
    //JUL 24
    [3496, 34826, 136, 48, 80, 771500],
    //JUL 25
    [3405, 35205, 137, 51, 74, 780081],
    //JUL 26
    [3302, 35689, 140, 48, 98, 788910],
    //JUL 27
    [3231, 36110, 141, 44, 74, 798799],
    //JUL 28
    [3249, 36531, 141, 50, 77, 808276],
    //JUL 29
    [3247, 36920, 144, 41, 64, 817608],
    //JUL 30
    [3252, 37357, 146, 41, 77, 826672],
    //JUL 31
    [2995, 37840, 147, 41, 71, 830998],
    //AUG 01
    [2832, 38211, 147, 43, 81, 835567],
    //AUG 02
    [2723, 38666, 147, 47, 69, 842992],
    //AUG 03
    [2678, 39007, 150, 48, 75, 850648],
    //AUG 04
    [2646, 39335, 151, 43, 95, 858249],
    //AUG 05
    [2784, 39576, 154, 41, 125, 867534],
    //AUG 06
    [2788, 39945, 156, 41, 76, 876700],
    //AUG 07
    [2872, 40276, 159, 40, 79, 886095],
    //AUG 08
    [2919, 40549, 161, 36, 89, 892926],
    //AUG 09
    [2882, 40967, 162, 36, 90, 902059],
    //AUG 10
    [3025, 41209, 163, 38, 101, 912111],
    //AUG 11
    [3135, 41504, 165, 38, 97, 923342],
    //AUG 12
    [3262, 41836, 166, 38, 79, 933762],
    //AUG 13
    [3379, 42180, 167, 40, 77, 944798],
    //AUG 14
    [3415, 42469, 168, 40, 85, 954192],
    //AUG 15
    [3454, 42806, 170, 35, 97, 962334],
    //AUG 16
    [3537, 43128, 170, 41, 93, 972003],
    //AUG 17
    [3483, 43529, 173, 42, 93, 981208],
    //AUG 18
    [3485, 43921, 175, 45, 93, 991140],
    //AUG 19
    [3494, 44278, 178, 39, 75, 1000787],
    //AUG 20
    [3496, 44628, 179, 37, 85, 1011805],
    //AUG 21
    [3314, 45166, 181, 36, 75, 1020803],
    //AUG 22
    [3266, 45589, 183, 33, 68, 1029969],
    //AUG 23
    [3165, 45981, 184, 34, 63, 1039571],
    //AUG 24
    [3223, 46311, 185, 33, 59, 1048935],
    //AUG 25
    [3217, 46673, 186, 32, 63, 1058509],
    //AUG 26
    [3158, 47049, 186, 30, 76, 1067907],
    //AUG 27
    [3198, 47370, 188, 33, 68, 1078767],
    //AUG 28
    [3164, 47760, 189, 30, 65, 1088418],
    //AUG 29
    [2927 + 54, 48275, 189, 32, 52, 1095373],
    //AUG 30
    [2731, 48654, 189, 34, 34, 1100729],
    //AUG 31
    [2735, 49047, 190, 36, 62, 1108088],
    //SEP 01
    [2855, 49395, 190, 37, 52, 1118837],
    //SEP 02
    [2972, 49645, 190, 34, 67, 1128829],
    //SEP 03
    [3230, 50013, 190, 39, 70, 1140563],
    //SEP 04
    [3577, 50323, 195, 33, 80, 1152274],
    //SEP 05
    [3930, 50645, 196, 30, 89, 1162349],
    //SEP 06
    [4270, 50946, 199, 32, 90, 1172808],
    //SEP 07
    [4636, 51240, 200, 31, 82, 1183388],
    //SEP 08
    [5002, 51574, 202, 30, 90, 1194923],
    //SEP 09
    [5428, 51819, 203, 29, 100, 1207260],
    //SEP 10
    [5716, 52284, 207, 28, 93, 1218988],
    //SEP 11
    [5855, 52776, 208, 29, 83, 1230227],
    //SEP 12
    [6183, 53192, 211, 26, 86, 1240204],
    //SEP 13
    [6414, 53681, 212, 29, 115, 1252898],
    //SEP 14
    [6548, 54204, 213, 30, 124, 1264235],
    //SEP 15
    [6599, 54831, 213, 34, 136, 1276075],
    //SEP 16
    [6824, 55444, 216, 38, 140, 1288374],
    //SEP 17
    [6885, 56087, 217, 40, 159, 1301170],
    //SEP 18
    [6959, 56700, 220, 43, 157, 1313471],
    //SEP 19
    [6979, 57299, 221, 46, 148, 1324002],
    //SEP 20
    [6868, 57950, 221, 52, 146, 1333275],
    //SEP 21
    [6902, 58626, 224, 52, 148, 1344713],
    //SEP 22
    [6808, 59367, 227, 50, 131, 1355399],
    //SEP 23
    [6666, 60117, 231, 54, 130, 1366396],
    //SEP 24
    [6617, 60853, 231, 59, 130, 1378104],
    //SEP 25
    [6479, 61475, 236, 55, 140, 1388323],
    //SEP 26
    [6284, 62252, 239, 61, 130, 1398454],
    //SEP 27
    [6232, 62887, 242, 61, 153, 1407572],
    //SEP 28
    [6054, 63549, 245, 61, 149, 1418129],
    //SEP 29
    [5909, 64267, 246, 59, 137, 1429432],
    //SEP 30
    [5775, 64838, 251, 62, 130, 1439332],
    //OCT 1
    [5570, 65550, 254, 61, 115, 1450153],
    //OCT 2
    [5364, 66184, 255, 58, 119, 1458920],
    //OCT 3
    [5239, 66813, 258, 56, 113, 1468655],
    //OCT 4
    [4927, 67475, 260, 64, 126, 1478163],
    //OCT 05
    [4922, 67933, 261, 61, 116, 1488703],
    //OCT 06
    [4608, 68606, 262, 71, 103, 1498843],
    //OCT 07
    [4259, 69411, 262, 69, 106, 1509071],
    //OCT 08
    [4304, 69854, 264, 64, 100, 1519596],
    //OCT 09
    [4183, 70406, 271, 62, 117, 1530133],
    //OCT 10
    [4206, 70808, 273, 58, 113, 1538925],
    //OCT 11
    [4090, 71249, 275, 57, 104, 1548011],
    //OCT 12
    [3981, 71687, 280, 51, 91, 1557638],
    //OCT 13
    [3823, 72164, 285, 52, 87, 1568037],
    //OCT 14
    [3773, 72561, 287, 52, 93, 1577500],
    //OCT 15
    [3652, 73013, 289, 47, 88, 1588422],
    //OCT 16
    [3612, 73421, 292, 42, 93, 1599549],
    //OCT 17
    [3437, 73841, 293, 46, 79, 1607692],
    //OCT 18
    [3282, 74320, 300, 39, 77, 1617632],
    //OCT 19
    [3239, 74683, 302, 35, 68, 1628076],
    //OCT 20
    [3139, 75089, 305, 31, 65, 1638436],
    //OCT 21
    [3175, 75424, 308, 31, 74, 1648827],
    //OCT 22
    [3063, 75840, 308, 29, 78, 1659781],
    //OCT 23
    [3120, 76143, 311, 29, 76, 1670411],


]


let d = x => new Date(x)



cases.day0 = d`2020-02-24`;
// cases.info = { pred_min: 275, pred_max: 378 };



cases.events = {
    [d`2020-04-24` - 0]: `Ramdan 1st`,
    [d`2020-05-25` - 0]: `Eid al-Fitr`,
    [d`2020-07-31` - 0]: `Eid al-Adha`,
    [d`2020-08-20` - 0]: `Hijri new year`,
    [d`2020-08-30` - 0]: `Ashura`,
    [d`2020-10-08` - 0]: `Arbaʽeen`,

}





export default cases;