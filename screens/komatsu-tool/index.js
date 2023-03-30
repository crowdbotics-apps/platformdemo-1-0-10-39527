import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const primaryColor = "#2D2F8A";
const secondaryColor = "#FFC82F";
const COLOR_GRAY_1 = "#A1A1A1";
const COLOR_GRAY_2 = "#8D92AB";
const BORDER_COLOR = "#A5ABAF";
const BORDER_RADIUS = 5;
const FONT_FAMILY_LIGHT = "NotoSans-Light"; //300

const FONT_FAMILY_MEDIUM = "NotoSans-Medium"; //500

const FONT_FAMILY_REGULAR = "NotoSans-Regular"; //400

const FONT_FAMILY_BOLD = "NotoSans-Bold"; //700

const FONT_FAMILY_SEMI_BOLD = "NotoSans-SemiBold"; //600

const loadingTools = [{
  "id": 54,
  "name": "PC1250LC",
  "cycle_time_second": "30.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "6.80",
  "cost_per_hour": "172.56",
  "metric_standard": {
    "bucket_size_m3": 5.198973,
    "bucket_size_m3_text": "5.198973 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 12,
    "name": "960E",
    "capacity_ton": "360.00",
    "cost_per_hour": "464.00",
    "metric_standard": {
      "capacity_tonne": 326.586506,
      "capacity_tonne_text": "326.586506 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 3,
    "name": "HD325",
    "capacity_ton": "40.30",
    "cost_per_hour": "64.55",
    "metric_standard": {
      "capacity_tonne": 36.559545,
      "capacity_tonne_text": "36.559545 tonne"
    }
  }, {
    "id": 4,
    "name": "HD405",
    "capacity_ton": "44.10",
    "cost_per_hour": "65.98",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }, {
    "id": 5,
    "name": "HD465",
    "capacity_ton": "61.00",
    "cost_per_hour": "87.90",
    "metric_standard": {
      "capacity_tonne": 55.338269,
      "capacity_tonne_text": "55.338269 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }, {
    "id": 1,
    "name": "HM300",
    "capacity_ton": "30.90",
    "cost_per_hour": "46.52",
    "metric_standard": {
      "capacity_tonne": 28.032008,
      "capacity_tonne_text": "28.032008 tonne"
    }
  }, {
    "id": 2,
    "name": "HM400",
    "capacity_ton": "44.10",
    "cost_per_hour": "62.95",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.795211Z",
  "updated": "2022-06-14T13:28:05.795226Z"
}, {
  "id": 55,
  "name": "PC2000",
  "cycle_time_second": "35.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "15.70",
  "cost_per_hour": "291.00",
  "metric_standard": {
    "bucket_size_m3": 12.003511,
    "bucket_size_m3_text": "12.003511 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 12,
    "name": "960E",
    "capacity_ton": "360.00",
    "cost_per_hour": "464.00",
    "metric_standard": {
      "capacity_tonne": 326.586506,
      "capacity_tonne_text": "326.586506 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.808403Z",
  "updated": "2022-06-14T13:28:05.808419Z"
}, {
  "id": 56,
  "name": "PC210LC",
  "cycle_time_second": "18.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "1.34",
  "cost_per_hour": "27.16",
  "metric_standard": {
    "bucket_size_m3": 1.024504,
    "bucket_size_m3_text": "1.024504 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 3,
    "name": "HD325",
    "capacity_ton": "40.30",
    "cost_per_hour": "64.55",
    "metric_standard": {
      "capacity_tonne": 36.559545,
      "capacity_tonne_text": "36.559545 tonne"
    }
  }, {
    "id": 4,
    "name": "HD405",
    "capacity_ton": "44.10",
    "cost_per_hour": "65.98",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }, {
    "id": 5,
    "name": "HD465",
    "capacity_ton": "61.00",
    "cost_per_hour": "87.90",
    "metric_standard": {
      "capacity_tonne": 55.338269,
      "capacity_tonne_text": "55.338269 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }, {
    "id": 1,
    "name": "HM300",
    "capacity_ton": "30.90",
    "cost_per_hour": "46.52",
    "metric_standard": {
      "capacity_tonne": 28.032008,
      "capacity_tonne_text": "28.032008 tonne"
    }
  }, {
    "id": 2,
    "name": "HM400",
    "capacity_ton": "44.10",
    "cost_per_hour": "62.95",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.820415Z",
  "updated": "2022-06-14T13:28:05.820432Z"
}, {
  "id": 57,
  "name": "PC240LC",
  "cycle_time_second": "18.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "1.57",
  "cost_per_hour": "31.19",
  "metric_standard": {
    "bucket_size_m3": 1.200351,
    "bucket_size_m3_text": "1.200351 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 3,
    "name": "HD325",
    "capacity_ton": "40.30",
    "cost_per_hour": "64.55",
    "metric_standard": {
      "capacity_tonne": 36.559545,
      "capacity_tonne_text": "36.559545 tonne"
    }
  }, {
    "id": 4,
    "name": "HD405",
    "capacity_ton": "44.10",
    "cost_per_hour": "65.98",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }, {
    "id": 5,
    "name": "HD465",
    "capacity_ton": "61.00",
    "cost_per_hour": "87.90",
    "metric_standard": {
      "capacity_tonne": 55.338269,
      "capacity_tonne_text": "55.338269 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }, {
    "id": 1,
    "name": "HM300",
    "capacity_ton": "30.90",
    "cost_per_hour": "46.52",
    "metric_standard": {
      "capacity_tonne": 28.032008,
      "capacity_tonne_text": "28.032008 tonne"
    }
  }, {
    "id": 2,
    "name": "HM400",
    "capacity_ton": "44.10",
    "cost_per_hour": "62.95",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.832520Z",
  "updated": "2022-06-14T13:28:05.832536Z"
}, {
  "id": 58,
  "name": "PC290LC",
  "cycle_time_second": "21.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "1.85",
  "cost_per_hour": "33.89",
  "metric_standard": {
    "bucket_size_m3": 1.414426,
    "bucket_size_m3_text": "1.414426 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 3,
    "name": "HD325",
    "capacity_ton": "40.30",
    "cost_per_hour": "64.55",
    "metric_standard": {
      "capacity_tonne": 36.559545,
      "capacity_tonne_text": "36.559545 tonne"
    }
  }, {
    "id": 4,
    "name": "HD405",
    "capacity_ton": "44.10",
    "cost_per_hour": "65.98",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }, {
    "id": 5,
    "name": "HD465",
    "capacity_ton": "61.00",
    "cost_per_hour": "87.90",
    "metric_standard": {
      "capacity_tonne": 55.338269,
      "capacity_tonne_text": "55.338269 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }, {
    "id": 1,
    "name": "HM300",
    "capacity_ton": "30.90",
    "cost_per_hour": "46.52",
    "metric_standard": {
      "capacity_tonne": 28.032008,
      "capacity_tonne_text": "28.032008 tonne"
    }
  }, {
    "id": 2,
    "name": "HM400",
    "capacity_ton": "44.10",
    "cost_per_hour": "62.95",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.845835Z",
  "updated": "2022-06-14T13:28:05.845860Z"
}, {
  "id": 59,
  "name": "PC3000",
  "cycle_time_second": "35.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "19.50",
  "cost_per_hour": "445.00",
  "metric_standard": {
    "bucket_size_m3": 14.90882,
    "bucket_size_m3_text": "14.908820 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 12,
    "name": "960E",
    "capacity_ton": "360.00",
    "cost_per_hour": "464.00",
    "metric_standard": {
      "capacity_tonne": 326.586506,
      "capacity_tonne_text": "326.586506 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.862811Z",
  "updated": "2022-06-14T13:28:05.862845Z"
}, {
  "id": 60,
  "name": "PC360LC",
  "cycle_time_second": "30.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "2.56",
  "cost_per_hour": "50.00",
  "metric_standard": {
    "bucket_size_m3": 1.95726,
    "bucket_size_m3_text": "1.957260 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 3,
    "name": "HD325",
    "capacity_ton": "40.30",
    "cost_per_hour": "64.55",
    "metric_standard": {
      "capacity_tonne": 36.559545,
      "capacity_tonne_text": "36.559545 tonne"
    }
  }, {
    "id": 4,
    "name": "HD405",
    "capacity_ton": "44.10",
    "cost_per_hour": "65.98",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }, {
    "id": 5,
    "name": "HD465",
    "capacity_ton": "61.00",
    "cost_per_hour": "87.90",
    "metric_standard": {
      "capacity_tonne": 55.338269,
      "capacity_tonne_text": "55.338269 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }, {
    "id": 1,
    "name": "HM300",
    "capacity_ton": "30.90",
    "cost_per_hour": "46.52",
    "metric_standard": {
      "capacity_tonne": 28.032008,
      "capacity_tonne_text": "28.032008 tonne"
    }
  }, {
    "id": 2,
    "name": "HM400",
    "capacity_ton": "44.10",
    "cost_per_hour": "62.95",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.874627Z",
  "updated": "2022-06-14T13:28:05.874645Z"
}, {
  "id": 61,
  "name": "PC390LC",
  "cycle_time_second": "30.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "2.91",
  "cost_per_hour": "52.00",
  "metric_standard": {
    "bucket_size_m3": 2.224855,
    "bucket_size_m3_text": "2.224855 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 3,
    "name": "HD325",
    "capacity_ton": "40.30",
    "cost_per_hour": "64.55",
    "metric_standard": {
      "capacity_tonne": 36.559545,
      "capacity_tonne_text": "36.559545 tonne"
    }
  }, {
    "id": 4,
    "name": "HD405",
    "capacity_ton": "44.10",
    "cost_per_hour": "65.98",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }, {
    "id": 5,
    "name": "HD465",
    "capacity_ton": "61.00",
    "cost_per_hour": "87.90",
    "metric_standard": {
      "capacity_tonne": 55.338269,
      "capacity_tonne_text": "55.338269 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }, {
    "id": 1,
    "name": "HM300",
    "capacity_ton": "30.90",
    "cost_per_hour": "46.52",
    "metric_standard": {
      "capacity_tonne": 28.032008,
      "capacity_tonne_text": "28.032008 tonne"
    }
  }, {
    "id": 2,
    "name": "HM400",
    "capacity_ton": "44.10",
    "cost_per_hour": "62.95",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.888134Z",
  "updated": "2022-06-14T13:28:05.888151Z"
}, {
  "id": 62,
  "name": "PC4000",
  "cycle_time_second": "35.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "29.00",
  "cost_per_hour": "610.00",
  "metric_standard": {
    "bucket_size_m3": 22.172091,
    "bucket_size_m3_text": "22.172091 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 12,
    "name": "960E",
    "capacity_ton": "360.00",
    "cost_per_hour": "464.00",
    "metric_standard": {
      "capacity_tonne": 326.586506,
      "capacity_tonne_text": "326.586506 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.900695Z",
  "updated": "2022-06-14T13:28:05.900713Z"
}, {
  "id": 63,
  "name": "PC490LC",
  "cycle_time_second": "30.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "3.80",
  "cost_per_hour": "59.12",
  "metric_standard": {
    "bucket_size_m3": 2.905308,
    "bucket_size_m3_text": "2.905308 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 3,
    "name": "HD325",
    "capacity_ton": "40.30",
    "cost_per_hour": "64.55",
    "metric_standard": {
      "capacity_tonne": 36.559545,
      "capacity_tonne_text": "36.559545 tonne"
    }
  }, {
    "id": 4,
    "name": "HD405",
    "capacity_ton": "44.10",
    "cost_per_hour": "65.98",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }, {
    "id": 5,
    "name": "HD465",
    "capacity_ton": "61.00",
    "cost_per_hour": "87.90",
    "metric_standard": {
      "capacity_tonne": 55.338269,
      "capacity_tonne_text": "55.338269 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }, {
    "id": 1,
    "name": "HM300",
    "capacity_ton": "30.90",
    "cost_per_hour": "46.52",
    "metric_standard": {
      "capacity_tonne": 28.032008,
      "capacity_tonne_text": "28.032008 tonne"
    }
  }, {
    "id": 2,
    "name": "HM400",
    "capacity_ton": "44.10",
    "cost_per_hour": "62.95",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.917817Z",
  "updated": "2022-06-14T13:28:05.917836Z"
}, {
  "id": 64,
  "name": "PC5500",
  "cycle_time_second": "35.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "38.00",
  "cost_per_hour": "819.00",
  "metric_standard": {
    "bucket_size_m3": 29.053085,
    "bucket_size_m3_text": "29.053085 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 12,
    "name": "960E",
    "capacity_ton": "360.00",
    "cost_per_hour": "464.00",
    "metric_standard": {
      "capacity_tonne": 326.586506,
      "capacity_tonne_text": "326.586506 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.931503Z",
  "updated": "2022-06-14T13:28:05.931520Z"
}, {
  "id": 65,
  "name": "PC650LC",
  "cycle_time_second": "30.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "5.00",
  "cost_per_hour": "82.90",
  "metric_standard": {
    "bucket_size_m3": 3.822774,
    "bucket_size_m3_text": "3.822774 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 12,
    "name": "960E",
    "capacity_ton": "360.00",
    "cost_per_hour": "464.00",
    "metric_standard": {
      "capacity_tonne": 326.586506,
      "capacity_tonne_text": "326.586506 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 3,
    "name": "HD325",
    "capacity_ton": "40.30",
    "cost_per_hour": "64.55",
    "metric_standard": {
      "capacity_tonne": 36.559545,
      "capacity_tonne_text": "36.559545 tonne"
    }
  }, {
    "id": 4,
    "name": "HD405",
    "capacity_ton": "44.10",
    "cost_per_hour": "65.98",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }, {
    "id": 5,
    "name": "HD465",
    "capacity_ton": "61.00",
    "cost_per_hour": "87.90",
    "metric_standard": {
      "capacity_tonne": 55.338269,
      "capacity_tonne_text": "55.338269 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }, {
    "id": 1,
    "name": "HM300",
    "capacity_ton": "30.90",
    "cost_per_hour": "46.52",
    "metric_standard": {
      "capacity_tonne": 28.032008,
      "capacity_tonne_text": "28.032008 tonne"
    }
  }, {
    "id": 2,
    "name": "HM400",
    "capacity_ton": "44.10",
    "cost_per_hour": "62.95",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.943831Z",
  "updated": "2022-06-14T13:28:05.943848Z"
}, {
  "id": 66,
  "name": "PC7000",
  "cycle_time_second": "35.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "47.00",
  "cost_per_hour": "1047.00",
  "metric_standard": {
    "bucket_size_m3": 35.934078,
    "bucket_size_m3_text": "35.934078 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 12,
    "name": "960E",
    "capacity_ton": "360.00",
    "cost_per_hour": "464.00",
    "metric_standard": {
      "capacity_tonne": 326.586506,
      "capacity_tonne_text": "326.586506 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.957004Z",
  "updated": "2022-06-14T13:28:05.957022Z"
}, {
  "id": 67,
  "name": "PC8000",
  "cycle_time_second": "35.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "55.00",
  "cost_per_hour": "1191.00",
  "metric_standard": {
    "bucket_size_m3": 42.050517,
    "bucket_size_m3_text": "42.050517 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 12,
    "name": "960E",
    "capacity_ton": "360.00",
    "cost_per_hour": "464.00",
    "metric_standard": {
      "capacity_tonne": 326.586506,
      "capacity_tonne_text": "326.586506 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.968689Z",
  "updated": "2022-06-14T13:28:05.968707Z"
}, {
  "id": 68,
  "name": "PC800LC",
  "cycle_time_second": "30.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "5.40",
  "cost_per_hour": "100.81",
  "metric_standard": {
    "bucket_size_m3": 4.128596,
    "bucket_size_m3_text": "4.128596 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 12,
    "name": "960E",
    "capacity_ton": "360.00",
    "cost_per_hour": "464.00",
    "metric_standard": {
      "capacity_tonne": 326.586506,
      "capacity_tonne_text": "326.586506 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 3,
    "name": "HD325",
    "capacity_ton": "40.30",
    "cost_per_hour": "64.55",
    "metric_standard": {
      "capacity_tonne": 36.559545,
      "capacity_tonne_text": "36.559545 tonne"
    }
  }, {
    "id": 4,
    "name": "HD405",
    "capacity_ton": "44.10",
    "cost_per_hour": "65.98",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }, {
    "id": 5,
    "name": "HD465",
    "capacity_ton": "61.00",
    "cost_per_hour": "87.90",
    "metric_standard": {
      "capacity_tonne": 55.338269,
      "capacity_tonne_text": "55.338269 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }, {
    "id": 1,
    "name": "HM300",
    "capacity_ton": "30.90",
    "cost_per_hour": "46.52",
    "metric_standard": {
      "capacity_tonne": 28.032008,
      "capacity_tonne_text": "28.032008 tonne"
    }
  }, {
    "id": 2,
    "name": "HM400",
    "capacity_ton": "44.10",
    "cost_per_hour": "62.95",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.981773Z",
  "updated": "2022-06-14T13:28:05.981789Z"
}, {
  "id": 41,
  "name": "P&H 1900XPC",
  "cycle_time_second": "31.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "13.30",
  "cost_per_hour": "254.00",
  "metric_standard": {
    "bucket_size_m3": 10.16858,
    "bucket_size_m3_text": "10.168580 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 3,
    "name": "HD325",
    "capacity_ton": "40.30",
    "cost_per_hour": "64.55",
    "metric_standard": {
      "capacity_tonne": 36.559545,
      "capacity_tonne_text": "36.559545 tonne"
    }
  }, {
    "id": 4,
    "name": "HD405",
    "capacity_ton": "44.10",
    "cost_per_hour": "65.98",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }, {
    "id": 5,
    "name": "HD465",
    "capacity_ton": "61.00",
    "cost_per_hour": "87.90",
    "metric_standard": {
      "capacity_tonne": 55.338269,
      "capacity_tonne_text": "55.338269 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.632350Z",
  "updated": "2022-06-14T13:28:05.632380Z"
}, {
  "id": 42,
  "name": "P&H 2300XPC",
  "cycle_time_second": "35.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "33.30",
  "cost_per_hour": "491.00",
  "metric_standard": {
    "bucket_size_m3": 25.459677,
    "bucket_size_m3_text": "25.459677 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 12,
    "name": "960E",
    "capacity_ton": "360.00",
    "cost_per_hour": "464.00",
    "metric_standard": {
      "capacity_tonne": 326.586506,
      "capacity_tonne_text": "326.586506 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 3,
    "name": "HD325",
    "capacity_ton": "40.30",
    "cost_per_hour": "64.55",
    "metric_standard": {
      "capacity_tonne": 36.559545,
      "capacity_tonne_text": "36.559545 tonne"
    }
  }, {
    "id": 4,
    "name": "HD405",
    "capacity_ton": "44.10",
    "cost_per_hour": "65.98",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }, {
    "id": 5,
    "name": "HD465",
    "capacity_ton": "61.00",
    "cost_per_hour": "87.90",
    "metric_standard": {
      "capacity_tonne": 55.338269,
      "capacity_tonne_text": "55.338269 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.650490Z",
  "updated": "2022-06-14T13:28:05.650512Z"
}, {
  "id": 43,
  "name": "P&H 2800XPC",
  "cycle_time_second": "35.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "43.30",
  "cost_per_hour": "662.00",
  "metric_standard": {
    "bucket_size_m3": 33.105225,
    "bucket_size_m3_text": "33.105225 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 12,
    "name": "960E",
    "capacity_ton": "360.00",
    "cost_per_hour": "464.00",
    "metric_standard": {
      "capacity_tonne": 326.586506,
      "capacity_tonne_text": "326.586506 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 3,
    "name": "HD325",
    "capacity_ton": "40.30",
    "cost_per_hour": "64.55",
    "metric_standard": {
      "capacity_tonne": 36.559545,
      "capacity_tonne_text": "36.559545 tonne"
    }
  }, {
    "id": 4,
    "name": "HD405",
    "capacity_ton": "44.10",
    "cost_per_hour": "65.98",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }, {
    "id": 5,
    "name": "HD465",
    "capacity_ton": "61.00",
    "cost_per_hour": "87.90",
    "metric_standard": {
      "capacity_tonne": 55.338269,
      "capacity_tonne_text": "55.338269 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.663472Z",
  "updated": "2022-06-14T13:28:05.663493Z"
}, {
  "id": 44,
  "name": "P&H 4100C Boss",
  "cycle_time_second": "35.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "66.70",
  "cost_per_hour": "966.00",
  "metric_standard": {
    "bucket_size_m3": 50.995809,
    "bucket_size_m3_text": "50.995809 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 12,
    "name": "960E",
    "capacity_ton": "360.00",
    "cost_per_hour": "464.00",
    "metric_standard": {
      "capacity_tonne": 326.586506,
      "capacity_tonne_text": "326.586506 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.675399Z",
  "updated": "2022-06-14T13:28:05.675418Z"
}, {
  "id": 45,
  "name": "P&H 4100XPC",
  "cycle_time_second": "35.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "74.00",
  "cost_per_hour": "929.00",
  "metric_standard": {
    "bucket_size_m3": 56.577059,
    "bucket_size_m3_text": "56.577059 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 12,
    "name": "960E",
    "capacity_ton": "360.00",
    "cost_per_hour": "464.00",
    "metric_standard": {
      "capacity_tonne": 326.586506,
      "capacity_tonne_text": "326.586506 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.688337Z",
  "updated": "2022-06-14T13:28:05.688364Z"
}, {
  "id": 46,
  "name": "P&H 4800XPC",
  "cycle_time_second": "35.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "90.00",
  "cost_per_hour": "982.00",
  "metric_standard": {
    "bucket_size_m3": 68.809937,
    "bucket_size_m3_text": "68.809937 m3"
  },
  "compatible_trucks": [{
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 12,
    "name": "960E",
    "capacity_ton": "360.00",
    "cost_per_hour": "464.00",
    "metric_standard": {
      "capacity_tonne": 326.586506,
      "capacity_tonne_text": "326.586506 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.700116Z",
  "updated": "2022-06-14T13:28:05.700136Z"
}, {
  "id": 47,
  "name": "P&H L-1150",
  "cycle_time_second": "40.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "25.00",
  "cost_per_hour": "296.30",
  "metric_standard": {
    "bucket_size_m3": 19.113871,
    "bucket_size_m3_text": "19.113871 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.711821Z",
  "updated": "2022-06-14T13:28:05.711846Z"
}, {
  "id": 48,
  "name": "P&H L-1150 HL",
  "cycle_time_second": "40.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "23.40",
  "cost_per_hour": "294.69",
  "metric_standard": {
    "bucket_size_m3": 17.890584,
    "bucket_size_m3_text": "17.890584 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.723512Z",
  "updated": "2022-06-14T13:28:05.723529Z"
}, {
  "id": 49,
  "name": "P&H L-1350",
  "cycle_time_second": "40.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "30.00",
  "cost_per_hour": "404.00",
  "metric_standard": {
    "bucket_size_m3": 22.936646,
    "bucket_size_m3_text": "22.936646 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.734787Z",
  "updated": "2022-06-14T13:28:05.734803Z"
}, {
  "id": 50,
  "name": "P&H L-1850",
  "cycle_time_second": "40.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "40.00",
  "cost_per_hour": "494.00",
  "metric_standard": {
    "bucket_size_m3": 30.582194,
    "bucket_size_m3_text": "30.582194 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.745970Z",
  "updated": "2022-06-14T13:28:05.745988Z"
}, {
  "id": 51,
  "name": "P&H L-1850 HL",
  "cycle_time_second": "40.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "36.60",
  "cost_per_hour": "492.00",
  "metric_standard": {
    "bucket_size_m3": 27.982708,
    "bucket_size_m3_text": "27.982708 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.758696Z",
  "updated": "2022-06-14T13:28:05.758713Z"
}, {
  "id": 52,
  "name": "P&H L-2350",
  "cycle_time_second": "45.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "53.40",
  "cost_per_hour": "599.00",
  "metric_standard": {
    "bucket_size_m3": 40.827229,
    "bucket_size_m3_text": "40.827229 m3"
  },
  "compatible_trucks": [{
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.771636Z",
  "updated": "2022-06-14T13:28:05.771653Z"
}, {
  "id": 53,
  "name": "P&H L-2350 HL",
  "cycle_time_second": "45.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "50.00",
  "cost_per_hour": "597.00",
  "metric_standard": {
    "bucket_size_m3": 38.227743,
    "bucket_size_m3_text": "38.227743 m3"
  },
  "compatible_trucks": [{
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.783481Z",
  "updated": "2022-06-14T13:28:05.783497Z"
}, {
  "id": 69,
  "name": "WA1200",
  "cycle_time_second": "40.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "26.20",
  "cost_per_hour": "388.00",
  "metric_standard": {
    "bucket_size_m3": 20.031337,
    "bucket_size_m3_text": "20.031337 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }],
  "created": "2022-06-14T13:28:05.993758Z",
  "updated": "2022-06-14T13:28:05.993775Z"
}, {
  "id": 70,
  "name": "WA1200 HL",
  "cycle_time_second": "40.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "23.50",
  "cost_per_hour": "384.00",
  "metric_standard": {
    "bucket_size_m3": 17.967039,
    "bucket_size_m3_text": "17.967039 m3"
  },
  "compatible_trucks": [{
    "id": 9,
    "name": "730E",
    "capacity_ton": "200.00",
    "cost_per_hour": "306.00",
    "metric_standard": {
      "capacity_tonne": 181.436948,
      "capacity_tonne_text": "181.436948 tonne"
    }
  }, {
    "id": 10,
    "name": "830E",
    "capacity_ton": "244.00",
    "cost_per_hour": "368.00",
    "metric_standard": {
      "capacity_tonne": 221.353077,
      "capacity_tonne_text": "221.353077 tonne"
    }
  }, {
    "id": 11,
    "name": "930E",
    "capacity_ton": "320.00",
    "cost_per_hour": "415.00",
    "metric_standard": {
      "capacity_tonne": 290.299117,
      "capacity_tonne_text": "290.299117 tonne"
    }
  }, {
    "id": 13,
    "name": "980E",
    "capacity_ton": "407.00",
    "cost_per_hour": "517.00",
    "metric_standard": {
      "capacity_tonne": 369.224189,
      "capacity_tonne_text": "369.224189 tonne"
    }
  }],
  "created": "2022-06-14T13:28:06.005119Z",
  "updated": "2022-06-14T13:28:06.005136Z"
}, {
  "id": 71,
  "name": "WA320",
  "cycle_time_second": "32.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "3.70",
  "cost_per_hour": "23.79",
  "metric_standard": {
    "bucket_size_m3": 2.828853,
    "bucket_size_m3_text": "2.828853 m3"
  },
  "compatible_trucks": [{
    "id": 1,
    "name": "HM300",
    "capacity_ton": "30.90",
    "cost_per_hour": "46.52",
    "metric_standard": {
      "capacity_tonne": 28.032008,
      "capacity_tonne_text": "28.032008 tonne"
    }
  }, {
    "id": 2,
    "name": "HM400",
    "capacity_ton": "44.10",
    "cost_per_hour": "62.95",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }],
  "created": "2022-06-14T13:28:06.016819Z",
  "updated": "2022-06-14T13:28:06.016836Z"
}, {
  "id": 72,
  "name": "WA380",
  "cycle_time_second": "32.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "4.30",
  "cost_per_hour": "29.66",
  "metric_standard": {
    "bucket_size_m3": 3.287586,
    "bucket_size_m3_text": "3.287586 m3"
  },
  "compatible_trucks": [{
    "id": 3,
    "name": "HD325",
    "capacity_ton": "40.30",
    "cost_per_hour": "64.55",
    "metric_standard": {
      "capacity_tonne": 36.559545,
      "capacity_tonne_text": "36.559545 tonne"
    }
  }, {
    "id": 1,
    "name": "HM300",
    "capacity_ton": "30.90",
    "cost_per_hour": "46.52",
    "metric_standard": {
      "capacity_tonne": 28.032008,
      "capacity_tonne_text": "28.032008 tonne"
    }
  }, {
    "id": 2,
    "name": "HM400",
    "capacity_ton": "44.10",
    "cost_per_hour": "62.95",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }],
  "created": "2022-06-14T13:28:06.028124Z",
  "updated": "2022-06-14T13:28:06.028143Z"
}, {
  "id": 73,
  "name": "WA470",
  "cycle_time_second": "40.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "5.50",
  "cost_per_hour": "41.62",
  "metric_standard": {
    "bucket_size_m3": 4.205052,
    "bucket_size_m3_text": "4.205052 m3"
  },
  "compatible_trucks": [{
    "id": 3,
    "name": "HD325",
    "capacity_ton": "40.30",
    "cost_per_hour": "64.55",
    "metric_standard": {
      "capacity_tonne": 36.559545,
      "capacity_tonne_text": "36.559545 tonne"
    }
  }, {
    "id": 1,
    "name": "HM300",
    "capacity_ton": "30.90",
    "cost_per_hour": "46.52",
    "metric_standard": {
      "capacity_tonne": 28.032008,
      "capacity_tonne_text": "28.032008 tonne"
    }
  }, {
    "id": 2,
    "name": "HM400",
    "capacity_ton": "44.10",
    "cost_per_hour": "62.95",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }],
  "created": "2022-06-14T13:28:06.039504Z",
  "updated": "2022-06-14T13:28:06.039523Z"
}, {
  "id": 74,
  "name": "WA475",
  "cycle_time_second": "40.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "5.80",
  "cost_per_hour": "33.57",
  "metric_standard": {
    "bucket_size_m3": 4.434418,
    "bucket_size_m3_text": "4.434418 m3"
  },
  "compatible_trucks": [{
    "id": 3,
    "name": "HD325",
    "capacity_ton": "40.30",
    "cost_per_hour": "64.55",
    "metric_standard": {
      "capacity_tonne": 36.559545,
      "capacity_tonne_text": "36.559545 tonne"
    }
  }, {
    "id": 1,
    "name": "HM300",
    "capacity_ton": "30.90",
    "cost_per_hour": "46.52",
    "metric_standard": {
      "capacity_tonne": 28.032008,
      "capacity_tonne_text": "28.032008 tonne"
    }
  }, {
    "id": 2,
    "name": "HM400",
    "capacity_ton": "44.10",
    "cost_per_hour": "62.95",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }],
  "created": "2022-06-14T13:28:06.050993Z",
  "updated": "2022-06-14T13:28:06.051011Z"
}, {
  "id": 75,
  "name": "WA480",
  "cycle_time_second": "40.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "6.50",
  "cost_per_hour": "44.18",
  "metric_standard": {
    "bucket_size_m3": 4.969607,
    "bucket_size_m3_text": "4.969607 m3"
  },
  "compatible_trucks": [{
    "id": 3,
    "name": "HD325",
    "capacity_ton": "40.30",
    "cost_per_hour": "64.55",
    "metric_standard": {
      "capacity_tonne": 36.559545,
      "capacity_tonne_text": "36.559545 tonne"
    }
  }, {
    "id": 1,
    "name": "HM300",
    "capacity_ton": "30.90",
    "cost_per_hour": "46.52",
    "metric_standard": {
      "capacity_tonne": 28.032008,
      "capacity_tonne_text": "28.032008 tonne"
    }
  }, {
    "id": 2,
    "name": "HM400",
    "capacity_ton": "44.10",
    "cost_per_hour": "62.95",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }],
  "created": "2022-06-14T13:28:06.063158Z",
  "updated": "2022-06-14T13:28:06.063175Z"
}, {
  "id": 76,
  "name": "WA500",
  "cycle_time_second": "40.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "7.60",
  "cost_per_hour": "56.46",
  "metric_standard": {
    "bucket_size_m3": 5.810617,
    "bucket_size_m3_text": "5.810617 m3"
  },
  "compatible_trucks": [{
    "id": 3,
    "name": "HD325",
    "capacity_ton": "40.30",
    "cost_per_hour": "64.55",
    "metric_standard": {
      "capacity_tonne": 36.559545,
      "capacity_tonne_text": "36.559545 tonne"
    }
  }, {
    "id": 1,
    "name": "HM300",
    "capacity_ton": "30.90",
    "cost_per_hour": "46.52",
    "metric_standard": {
      "capacity_tonne": 28.032008,
      "capacity_tonne_text": "28.032008 tonne"
    }
  }, {
    "id": 2,
    "name": "HM400",
    "capacity_ton": "44.10",
    "cost_per_hour": "62.95",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }],
  "created": "2022-06-14T13:28:06.075253Z",
  "updated": "2022-06-14T13:28:06.075271Z"
}, {
  "id": 77,
  "name": "WA600",
  "cycle_time_second": "40.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "8.40",
  "cost_per_hour": "95.31",
  "metric_standard": {
    "bucket_size_m3": 6.422261,
    "bucket_size_m3_text": "6.422261 m3"
  },
  "compatible_trucks": [{
    "id": 3,
    "name": "HD325",
    "capacity_ton": "40.30",
    "cost_per_hour": "64.55",
    "metric_standard": {
      "capacity_tonne": 36.559545,
      "capacity_tonne_text": "36.559545 tonne"
    }
  }, {
    "id": 4,
    "name": "HD405",
    "capacity_ton": "44.10",
    "cost_per_hour": "65.98",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }, {
    "id": 5,
    "name": "HD465",
    "capacity_ton": "61.00",
    "cost_per_hour": "87.90",
    "metric_standard": {
      "capacity_tonne": 55.338269,
      "capacity_tonne_text": "55.338269 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 1,
    "name": "HM300",
    "capacity_ton": "30.90",
    "cost_per_hour": "46.52",
    "metric_standard": {
      "capacity_tonne": 28.032008,
      "capacity_tonne_text": "28.032008 tonne"
    }
  }, {
    "id": 2,
    "name": "HM400",
    "capacity_ton": "44.10",
    "cost_per_hour": "62.95",
    "metric_standard": {
      "capacity_tonne": 40.006847,
      "capacity_tonne_text": "40.006847 tonne"
    }
  }],
  "created": "2022-06-14T13:28:06.089731Z",
  "updated": "2022-07-05T16:04:21.808137Z"
}, {
  "id": 78,
  "name": "WA800",
  "cycle_time_second": "40.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "15.00",
  "cost_per_hour": "247.00",
  "metric_standard": {
    "bucket_size_m3": 11.468323,
    "bucket_size_m3_text": "11.468323 m3"
  },
  "compatible_trucks": [{
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 5,
    "name": "HD465",
    "capacity_ton": "61.00",
    "cost_per_hour": "87.90",
    "metric_standard": {
      "capacity_tonne": 55.338269,
      "capacity_tonne_text": "55.338269 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }],
  "created": "2022-06-14T13:28:06.101680Z",
  "updated": "2022-06-20T14:34:16.369971Z"
}, {
  "id": 79,
  "name": "WA900",
  "cycle_time_second": "40.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "17.00",
  "cost_per_hour": "264.00",
  "metric_standard": {
    "bucket_size_m3": 12.997433,
    "bucket_size_m3_text": "12.997433 m3"
  },
  "compatible_trucks": [{
    "id": 5,
    "name": "HD465",
    "capacity_ton": "61.00",
    "cost_per_hour": "87.90",
    "metric_standard": {
      "capacity_tonne": 55.338269,
      "capacity_tonne_text": "55.338269 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }],
  "created": "2022-06-14T13:28:06.114571Z",
  "updated": "2022-06-14T13:28:06.114590Z"
}, {
  "id": 80,
  "name": "WA900 HL",
  "cycle_time_second": "40.0",
  "bucket_fill": "95.0",
  "bucket_size_yd3": "15.00",
  "cost_per_hour": "260.00",
  "metric_standard": {
    "bucket_size_m3": 11.468323,
    "bucket_size_m3_text": "11.468323 m3"
  },
  "compatible_trucks": [{
    "id": 8,
    "name": "HD1500",
    "capacity_ton": "156.00",
    "cost_per_hour": "226.00",
    "metric_standard": {
      "capacity_tonne": 141.520819,
      "capacity_tonne_text": "141.520819 tonne"
    }
  }, {
    "id": 5,
    "name": "HD465",
    "capacity_ton": "61.00",
    "cost_per_hour": "87.90",
    "metric_standard": {
      "capacity_tonne": 55.338269,
      "capacity_tonne_text": "55.338269 tonne"
    }
  }, {
    "id": 6,
    "name": "HD605",
    "capacity_ton": "69.40",
    "cost_per_hour": "87.85",
    "metric_standard": {
      "capacity_tonne": 62.958621,
      "capacity_tonne_text": "62.958621 tonne"
    }
  }, {
    "id": 7,
    "name": "HD785",
    "capacity_ton": "102.00",
    "cost_per_hour": "178.00",
    "metric_standard": {
      "capacity_tonne": 92.532843,
      "capacity_tonne_text": "92.532843 tonne"
    }
  }],
  "created": "2022-06-14T13:28:06.126816Z",
  "updated": "2022-06-14T13:28:06.126834Z"
}];

function validateInputNumber(input) {
  const re = /\d+\.?\d*/;
  return re.test(String(input).toLowerCase());
}

const KomatsuTool = ({}) => {
  const [selectedLoadingTool, setSelectedLoadingTool] = useState({});
  const [selectedHaulingTool, setSelectedHaulingTool] = useState({});
  const [haulingTools, setHaulingTools] = useState([]);
  const [cycleTime, setCycleTime] = useState("");
  const [bucketSize, setBucketSize] = useState("");
  const [bucketSizeUSMetric, setBucketSizeUSMetric] = useState("");
  const [bucketFill, setBucketFill] = useState("");
  const [payload, setPayload] = useState("");
  const [payloadUSMetric, setPayloadUSMetric] = useState({});
  const [cycleTimeErr, setCycleTimeErr] = useState("");
  const [bucketSizeErr, setBucketSizeErr] = useState("");
  const [bucketFillErr, setBucketFillErr] = useState("");
  const [payloadErr, setPayloadErr] = useState("");
  const units = [{
    id: 1,
    name: "Metric",
    value: "Metric"
  }, {
    id: 2,
    name: "US Customary",
    value: "US Customary"
  }];
  const unitV = {
    label: "Metric",
    value: "Metric"
  };
  const [unit, setUnit] = useState(unitV);
  const [unitStateValue, setUnitStateValue] = useState(unitStateValue);

  const handleNext = async () => {
    if (!validateInputNumber(cycleTime)) {
      setCycleTimeErr("Invalid cycle time");
      return;
    }

    setCycleTimeErr("");

    if (!validateInputNumber(bucketSize)) {
      setBucketSizeErr("Invalid bucket size");
      return;
    }

    setBucketSizeErr("");

    if (!validateInputNumber(bucketFill)) {
      setBucketFillErr("Invalid bucket fill");
      return;
    }

    setBucketFillErr("");

    if (!validateInputNumber(payload)) {
      setPayloadErr("Invalid nom. payload");
      return;
    }

    setPayloadErr("");
    const values = {
      unit_selection: unitStateValue?.value === "Metric" ? "metric" : "us",
      loading_tool: {
        name: selectedLoadingTool?.name,
        cycle_time_second: parseFloat(cycleTime),
        bucket_fill: parseFloat(bucketFill),
        bucket_size: parseFloat(bucketSize),
        cost_per_hour: parseFloat(selectedLoadingTool?.cost_per_hour)
      },
      hauling_tool: {
        name: selectedHaulingTool?.name,
        capacity_ton: parseFloat(payload),
        cost_per_hour: parseFloat(selectedHaulingTool?.cost_per_hour)
      }
    };
  };

  const handleUnitChange = value => {
    setUnit(value);
    setUnitStateValue(value);
    resetEverything();
  };

  const resetEverything = () => {
    setSelectedLoadingTool({});
    setSelectedHaulingTool({});
    setHaulingTools([]);
    setCycleTime("");
    setBucketSize("");
    setBucketSizeUSMetric("");
    setBucketFill("");
    setPayload("");
    setPayloadUSMetric("");
    setCycleTimeErr("");
    setBucketSizeErr("");
    setBucketFillErr("");
    setPayloadErr("");
  };

  const handleloadingToolsChange = (value, reset = false) => {
    setHaulingTools(value?.compatible_trucks);
    setCycleTime(Number(value?.cycle_time_second).toFixed(1));
    setBucketFill(Number(value?.bucket_fill).toFixed(1)); //check if user has manually inputed bucket size

    if (bucketSizeUSMetric?.metric && !reset && value?.name == bucketSizeUSMetric?.loadingTool //check if loadingTool has changed
    ) {
      // if true setBucketSize "bucketSizeUSMetric".metric or us
      if (unitStateValue?.value === "Metric") {
        setBucketSize(bucketSizeUSMetric.metric);
      } else {
        setBucketSize(bucketSizeUSMetric.us);
      }
    } else {
      // else setBucketSize to default selected value
      unitStateValue?.value === "Metric" ? setBucketSize(Number(Number(value?.metric_standard?.bucket_size_m3).toFixed(2)).toString()) : setBucketSize(Number(Number(value?.bucket_size_yd3).toFixed(2)).toString());
      setBucketSizeUSMetric({});
    }

    if (!reset) {
      setSelectedHaulingTool({});
      setPayload("");
    }

    setSelectedLoadingTool(value);
  };

  const handleHaulingToolsChange = (value, reset = false) => {
    //check if user has manually inputed Num payload
    if (payloadUSMetric?.metric && !reset && value?.name === payloadUSMetric?.haulingTool //check if hauling tool has changed
    ) {
      if (unitStateValue?.value === "Metric") {
        setPayload(payloadUSMetric.metric);
      } else {
        setPayload(payloadUSMetric.us);
      }
    } else {
      // else setBucketSize to default selected value
      unitStateValue?.value === "Metric" ? setPayload(Number(value?.metric_standard?.capacity_tonne).toFixed(1)) : setPayload(Number(value?.capacity_ton).toFixed(1));
      setPayloadUSMetric({});
    }

    setSelectedHaulingTool(value);
  };

  const resetTruck = () => {
    if (selectedHaulingTool?.name) {
      handleHaulingToolsChange(selectedHaulingTool, true);
    }
  };

  const resetLoader = () => {
    if (selectedLoadingTool?.name) {
      handleloadingToolsChange(selectedLoadingTool, true);
    }
  };

  const handleChangeBucketSizeUSMetric = bucketSize => {
    // Cubic Meters to Cubic Yards formula
    //  Cubic Yards = Cubic Meters * 1.308
    if (unitStateValue?.value === "Metric") {
      const cubicY3 = (parseFloat(bucketSize) * 1.308).toFixed(2);
      setBucketSizeUSMetric({
        metric: bucketSize,
        us: cubicY3.toString(),
        loadingTool: selectedLoadingTool.name // to keep loadingTool changes

      });
    } else {
      const cubicM3 = (parseFloat(bucketSize) / 1.308).toFixed(2);
      setBucketSizeUSMetric({
        us: bucketSize,
        metric: cubicM3.toString(),
        loadingTool: selectedLoadingTool.name // to keep loadingTool changes

      });
    }
  };

  const handleChangeNumPayloadUSMetric = payload => {
    // Metric Tons (Tonnes) to Tons Conversion formula
    // tons = metric tons × 1.102311
    if (unitStateValue?.value === "Metric") {
      const tons = (parseFloat(payload) * 1.102311).toFixed(1);
      setPayloadUSMetric({
        metric: payload.toString(),
        us: tons.toString(),
        haulingTool: selectedHaulingTool.name // to keeploadingTool change

      });
    } else {
      const metric_tons = (parseFloat(payload) / 1.102311).toFixed(1);
      setPayloadUSMetric({
        us: payload.toString(),
        metric: metric_tons.toString(),
        haulingTool: selectedHaulingTool.name // to keep hauling tool change

      });
    }
  };

  const handleChangeInputFloat = (value, setValue) => {
    var res = value.split(".");

    if (res.length > 1 && res[1]) {
      setValue(Number(value).toFixed(1));
    } else {
      setValue(value);
    }
  };

  const handleChangeInputFloatBucketSize = (value, setValue) => {
    var res = value.split(".");

    if (res.length > 1 && res[2]) {
      setValue(Number(value).toFixed(2));
      handleChangeBucketSizeUSMetric(Number(value).toFixed(2));
    } else {
      setValue(value);
      handleChangeBucketSizeUSMetric(value);
    }
  };

  const handleChangeInputFloatNumPayload = (value, setValue) => {
    var res = value.split(".");

    if (res.length > 1 && res[1]) {
      setValue(Number(value).toFixed(1));
      handleChangeNumPayloadUSMetric(Number(value).toFixed(1));
    } else {
      setValue(value);
      handleChangeNumPayloadUSMetric(value);
    }
  };

  return <ScrollView style={styles.container}>
      <Text style={styles.title}>Fleet Definition</Text>

        <Select label="Unit Selection" items={units} handleChange={handleUnitChange} selected={unit} showDefault={true} labelName="label" valueName="value" />

        <View style={styles.inputGroup}>
          <Select label="Loading Tool" items={loadingTools} selected={selectedLoadingTool} setSelected={setSelectedLoadingTool} handleChange={handleloadingToolsChange} labelName="name" valueName="name" />
          <Input inputLabel="Cycle Time (Sec) " value={cycleTime} setValue={value => handleChangeInputFloat(value, setCycleTime)} errorMessage={cycleTimeErr} />
        </View>
        <View style={styles.inputGroup}>
          <Input inputLabel="Bucket Fill (%)" value={bucketFill} setValue={value => handleChangeInputFloat(value, setBucketFill)} errorMessage={bucketFillErr} />
          <Input inputLabel={`Bucket Size ${unitStateValue?.value === "Metric" ? `(m\u00B3)` : `(yd\u00B3)`}`} value={bucketSize} setValue={value => handleChangeInputFloatBucketSize(value, setBucketSize)} errorMessage={bucketSizeErr} />
        </View>

        <View style={styles.btnSpacer}>
          <Button btnText="Reset Loader" onPress={resetLoader} />
        </View>

        <View style={styles.inputGroup}>
          <Select label="Hauling Tool" items={haulingTools} selected={selectedHaulingTool} handleChange={handleHaulingToolsChange} labelName="name" valueName="name" />
          <Input inputLabel={`Nom. Payload ${unitStateValue?.value === "Metric" ? "(tonnes)" : "(tons)"}`} value={payload} setValue={value => handleChangeInputFloatNumPayload(value, setPayload)} errorMessage={payloadErr} />
        </View>
        <View style={styles.btnSpacer}>
          <Button btnText="Reset Truck" onPress={resetTruck} />
        </View>
        <View style={styles.footer}>
          <Button btnText="Next" isPrimary onPress={handleNext} isLoading={false} />
        </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  placeHolder: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 12,
    marginBottom: 5
  },
  inputContainer: {
    marginBottom: 10
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: BORDER_RADIUS,
    paddingLeft: 10,
    color: "#000"
  },
  labelContainer: {
    flexDirection: "row"
  },
  labelIcon: {
    fontSize: 12,
    marginLeft: 2,
    marginTop: 3
  },
  errorMessage: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 12,
    color: "red",
    marginTop: 5
  },
  selectContainer: {},
  dropdown: {
    height: 40,
    borderWidth: 0.5,
    borderColor: BORDER_COLOR,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: 5,
    backgroundColor: "white"
  },
  icon: {
    marginRight: 5
  },
  label: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 12,
    marginBottom: 5,
    marginTop: 10
  },
  placeholderStyle: {
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR
  },
  selectedTextStyle: {
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR
  },
  iconStyle: {
    width: 30,
    height: 30
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16
  },
  item: {
    height: 30,
    justifyContent: "center",
    paddingLeft: 10
  },
  itemActive: {
    backgroundColor: "rgba(255, 200, 47, 0.2)"
  },
  btnText: {
    fontFamily: FONT_FAMILY_MEDIUM,
    fontSize: 14
  },
  btnTextWhite: {
    color: "#fff"
  },
  containerBlue: {
    backgroundColor: primaryColor
  },
  containerHalf: {
    width: "50%"
  },
  title: {
    fontFamily: FONT_FAMILY_MEDIUM,
    fontSize: 28,
    marginBottom: 10,
    marginTop: 10
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7
  },
  btnSpacer: {
    paddingVertical: 20
  },
  nextBtn: {
    flex: 1,
    alignSelf: "flex-end"
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 12,
    minHeight: 100
  },
  btnContainer: {
    flexDirection: "row",
    backgroundColor: secondaryColor,
    justifyContent: "space-around",
    alignItems: "center",
    height: 40,
    borderRadius: 5
  },
  ddContainer: {
    width: '100%',
    marginBottom: 10
  },
  ddHeader: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    width: '100%'
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  ddOptionsContainer: {
    marginTop: 45,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    width: '100%',
    position: 'absolute',
    zIndex: 999,
    maxHeight: 250,
    minWidth: 200
  },
  Option: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const Select = ({
  label = "label",
  placeholder = "Select",
  items = [],
  selected,
  labelName,
  valueName,
  handleChange
}) => {
  const [isFocus, setIsFocus] = useState(false);
  return <View style={{ ...styles.selectContainer
  }}>
      <Text style={styles.label}>{label}</Text>
      <Dropdown style={[styles.dropdown]} placeholderStyle={styles.placeholderStyle} selectedTextStyle={styles.selectedTextStyle} selectedStyle={{
      backgroundColor: "red"
    }} containerStyle={{}} iconStyle={styles.iconStyle} options={items} maxHeight={250} placeholder={placeholder} labelField={[labelName]} valueField={[valueName]} renderItem={item => <View style={[styles.item, selected?.[valueName] === item?.[labelName] && styles.itemActive]}>
            <Text style={styles.itemLabel}>{item?.[labelName]}</Text>
          </View>} selectedValue={selected?.[valueName]} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} onValueChange={item => {
      handleChange(item);
      setIsFocus(false);
    }} />
    </View>;
};

const Input = ({
  placeHolder = "",
  inputLabel = "Label",
  symbol = null,
  value,
  setValue,
  customContainerStyle = {},
  customInputStyle = {},
  showLabelIcon = false,
  multiline = false,
  onPressIcon = () => {},
  errorMessage = ""
}) => {
  return <View style={{ ...styles.inputContainer,
    ...customContainerStyle
  }}>
      <View style={styles.labelContainer}>
        <Text style={styles.placeHolder}>{inputLabel}</Text>
        {symbol && <Text style={styles.labelIcon}>{symbol}</Text>}
        <View style={styles.labelIcon}>
          {showLabelIcon ? <TouchableOpacity onPress={onPressIcon}>
            </TouchableOpacity> : <View />}
        </View>
      </View>
      <TextInput placeholder={placeHolder} placeholderTextColor="#A5ABAF" style={[styles.input, customInputStyle && customInputStyle]} value={value} onChangeText={setValue} multiline={multiline} />

      {errorMessage.length > 0 && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>;
};

const Button = ({
  btnText = "Button",
  isPrimary = false,
  onPress = () => {},
  halfWidthBtn = false,
  customStyle = {},
  isLoading
}) => {
  const containerStyle = isPrimary ? { ...styles.btnContainer,
    ...styles.containerBlue
  } : { ...styles.btnContainer
  };
  const halfWidthBtnStyle = halfWidthBtn ? { ...styles.containerHalf
  } : {};
  return <TouchableOpacity style={{ ...containerStyle,
    ...halfWidthBtnStyle,
    ...customStyle
  }} onPress={() => {
    if (!isLoading) {
      onPress();
    }
  }}>
      {isLoading ? <ActivityIndicator size="small" color="#0000ff" /> : <Text style={isPrimary ? { ...styles.btnText,
      ...styles.btnTextWhite
    } : { ...styles.btnText
    }}>
          {btnText}
        </Text>}
    </TouchableOpacity>;
};

const Dropdown = ({
  options,
  selectedValue,
  onValueChange,
  labelField,
  placeholder
}) => {
  const [open, setOpen] = useState(false);
  return <View style={styles.ddContainer}>
      <TouchableOpacity style={styles.ddHeader} onPress={() => setOpen(!open)}>
        {
        /* {labelField && <Text style={styles.headerText}>{labelField}</Text>} */
      }
        {selectedValue ? <Text style={styles.headerText}>{selectedValue}</Text> : <Text style={styles.headerText}>{placeholder}</Text>}
      </TouchableOpacity>
      {open && <ScrollView style={styles.ddOptionsContainer}>
          {options.map(option => <Pressable key={option.id} style={styles.ddOption} onPress={() => {
        onValueChange(option);
        setOpen(false);
      }}>
              <View style={[styles.item, selectedValue === option?.name && styles.itemActive]}>
                <Text style={styles.itemLabel}>{option.name}</Text>
              </View>
            </Pressable>)}
        </ScrollView>}
    </View>;
};

export default KomatsuTool;