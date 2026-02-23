import { ProgramSchema } from '../types/program';

export const programV1: ProgramSchema = {
  "version": "v1",
  "name": "12-Week Powerbuilding",
  "weeks": 12,
  "days": [
    {
      "key": "wk1_day1",
      "week": 1,
      "dayNumber": 1,
      "name": "Full Body 1",
      "exercises": [
        {
          "key": "back_squat",
          "name": "Back Squat",
          "note": "1 set x 2 reps @ 82.5-87.5% 1RM, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "2",
              "suggestedRpe": 7,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "front_squat_or_box_squat_",
          "name": "Front Squat [or Box Squat]",
          "note": "3 sets x 8 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 7,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 7,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 7,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_bench_press",
          "name": "Barbell Bench Press",
          "note": "1 set x 4 reps @ 80-85% 1RM, RPE 8.5",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8.5,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 7,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 7,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "weighted_pull_up",
          "name": "Weighted Pull-Up",
          "note": "3 sets x 4-6 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "glute_ham_raise_or_nordic_ham_curl_",
          "name": "Glute-Ham Raise [or Nordic Ham Curl]",
          "note": "3 sets x 6-8 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 7,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 7,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 7,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "seated_face_pull",
          "name": "Seated Face Pull",
          "note": "4 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk1_day2",
      "week": 1,
      "dayNumber": 2,
      "name": "Full Body 2",
      "exercises": [
        {
          "key": "deadlift",
          "name": "Deadlift",
          "note": "3 sets x 4 reps @ 80% 1RM, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 7,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 7,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 7,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_overhead_press",
          "name": "Barbell Overhead Press",
          "note": "4 sets x 5 reps @ 75% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "bulgarian_split_squat",
          "name": "Bulgarian Split Squat",
          "note": "2 sets x 8-10 reps (each leg), RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "meadows_row",
          "name": "Meadows Row",
          "note": "4 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "barbell_or_ez_bar_curl",
          "name": "Barbell or EZ Bar Curl",
          "note": "3 sets x 8-10 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "pec_flye",
          "name": "Pec Flye",
          "note": "2 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk1_day3",
      "week": 1,
      "dayNumber": 3,
      "name": "Full Body 3",
      "exercises": [
        {
          "key": "back_squat",
          "name": "Back Squat",
          "note": "1 set x 6 reps @ 75-80% 1RM, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 7,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "pin_squat",
          "name": "Pin Squat",
          "note": "2 sets x 4 reps @ 70% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_bench_press",
          "name": "Barbell Bench Press",
          "note": "1 set x 1 rep @ 87.5-92.5% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "chin_up",
          "name": "Chin-Up",
          "note": "3 sets x AMRAP (stop at RPE 8), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "single_leg_hip_thrust",
          "name": "Single-Leg Hip Thrust",
          "note": "2 sets x 10-12 reps (each leg), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "cable_reverse_flye",
          "name": "Cable Reverse Flye",
          "note": "4 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk1_day4",
      "week": 1,
      "dayNumber": 4,
      "name": "Full Body 4",
      "exercises": [
        {
          "key": "6_block_pull",
          "name": "6\" Block Pull",
          "note": "2 sets x 6 reps @ 90% 1RM, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "pause_db_incline_press",
          "name": "Pause DB Incline Press",
          "note": "4 sets x 6-8 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "leg_curl_choice_",
          "name": "Leg Curl (Choice)",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "chest_supported_row",
          "name": "Chest-Supported Row",
          "note": "4 sets x 10-12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "rope_overhead_triceps_extension",
          "name": "Rope Overhead Triceps Extension",
          "note": "4 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "egyptian_lateral_raise",
          "name": "Egyptian Lateral Raise",
          "note": "4 sets x 8-10 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk1_day5",
      "week": 1,
      "dayNumber": 5,
      "name": "Full Body 5 - Pump Day",
      "exercises": [
        {
          "key": "a1",
          "name": "A1",
          "note": "Hammer Curl: 4 sets x 8-10 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a2",
          "name": "A2",
          "note": "Single-Arm Overhead Triceps Extension: 4 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "b1",
          "name": "B1",
          "note": "Cable Curl: 3 sets x 20 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "20",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "b2",
          "name": "B2",
          "note": "Cable Triceps Kickback: 3 sets x 20 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "20",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "enhanced_eccentric_calf_raise",
          "name": "Enhanced-Eccentric Calf Raise",
          "note": "3 sets x 8 reps (each leg), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "c1",
          "name": "C1",
          "note": "Plate Shrug: 3 sets x 15-20 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "c2",
          "name": "C2",
          "note": "Neck Flexion/Extension (Optional): 3 sets x 15/15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk2_day1",
      "week": 2,
      "dayNumber": 1,
      "name": "Legs 1",
      "exercises": [
        {
          "key": "back_squat",
          "name": "Back Squat",
          "note": "3 sets x 4 reps @ 75-80% 1RM, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 7,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 7,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 7,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_rdl",
          "name": "Barbell RDL",
          "note": "3 sets x 10 reps, RPE 6",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 6,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 6,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 6,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "unilateral_leg_press",
          "name": "Unilateral Leg Press",
          "note": "2 sets x 12-15 reps (each leg), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "eccentric_accentuated_leg_extension",
          "name": "Eccentric-Accentuated Leg Extension",
          "note": "2 sets x 10-12 reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 10,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "leg_curl_choice_",
          "name": "Leg Curl (Choice)",
          "note": "2 sets x 10/15 reps (Dropset), RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10/15",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10/15",
              "suggestedRpe": 10,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "standing_calf_raise",
          "name": "Standing Calf Raise",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "a1",
          "name": "A1",
          "note": "Weighted Crunch: 3 sets x 10-12 reps (each side), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a2",
          "name": "A2",
          "note": "Long-Lever Plank (Optional): 3 sets x 30 sec, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk2_day2",
      "week": 2,
      "dayNumber": 2,
      "name": "Push 1",
      "exercises": [
        {
          "key": "barbell_bench_press",
          "name": "Barbell Bench Press",
          "note": "2 sets x 8 reps @ 72.5% 1RM, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 7,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 7,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "machine_shoulder_press",
          "name": "Machine Shoulder Press",
          "note": "3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "dip",
          "name": "Dip",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "eccentric_accentuated_barbell_skull_crusher",
          "name": "Eccentric-Accentuated Barbell Skull Crusher",
          "note": "3 sets x 8-10 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "egyptian_lateral_raise",
          "name": "Egyptian Lateral Raise",
          "note": "3 sets x 8-10(+4+4) reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10(+4+4)",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10(+4+4)",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10(+4+4)",
              "suggestedRpe": 10,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "constant_tension_cable_triceps_kickback",
          "name": "Constant-Tension Cable Triceps Kickback",
          "note": "2 sets x 20-30 reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "20-30",
              "suggestedRpe": 10,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "20-30",
              "suggestedRpe": 10,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk2_day3",
      "week": 2,
      "dayNumber": 3,
      "name": "Pull 1",
      "exercises": [
        {
          "key": "weighted_pull_up",
          "name": "Weighted Pull-Up",
          "note": "3 sets x 4-6 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "seated_cable_row",
          "name": "Seated Cable Row",
          "note": "3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "constant_tension_cable_kneeling_pullover",
          "name": "Constant-Tension Cable Kneeling Pullover",
          "note": "3 sets x 15-25 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-25",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-25",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-25",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "hammer_cheat_curl",
          "name": "Hammer \"Cheat\" Curl",
          "note": "4 sets x 8-10 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "incline_dumbbell_curl",
          "name": "Incline Dumbbell Curl",
          "note": "2 sets x 20-30 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "20-30",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "20-30",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "incline_dumbbell_shrug",
          "name": "Incline Dumbbell Shrug",
          "note": "3 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk2_day4",
      "week": 2,
      "dayNumber": 4,
      "name": "Legs 2",
      "exercises": [
        {
          "key": "reset_deadlift",
          "name": "Reset Deadlift",
          "note": "3 sets x 3 reps @ 80-85% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "3",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "3",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "3",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "hack_squat",
          "name": "Hack Squat",
          "note": "3 sets x 12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "single_leg_hip_thrust",
          "name": "Single-Leg Hip Thrust",
          "note": "2 sets x 10-12 reps (each leg), RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a1",
          "name": "A1",
          "note": "Glute-Ham Raise [or Nordic Ham Curl]: 3 sets x 6-8 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a2",
          "name": "A2",
          "note": "Prisoner Back Extension: 3 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "unilateral_standing_calf_raise",
          "name": "Unilateral Standing Calf Raise",
          "note": "3 sets x 8-10 reps (each leg), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "l_sit_hold",
          "name": "L-Sit Hold",
          "note": "3 sets x 10-20 sec, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk2_day5",
      "week": 2,
      "dayNumber": 5,
      "name": "Push 2",
      "exercises": [
        {
          "key": "barbell_overhead_press",
          "name": "Barbell Overhead Press",
          "note": "2 sets x 4 reps @ 77.5-82.5% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "close_grip_bench_press",
          "name": "Close-Grip Bench Press",
          "note": "3 sets x 10 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "pec_flye",
          "name": "Pec Flye",
          "note": "3 sets x 12/20 reps (Dropset on last set), RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12/20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12/20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12/20",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "rope_overhead_triceps_extension",
          "name": "Rope Overhead Triceps Extension",
          "note": "3 sets x 10(+3+3+3) reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10(+3+3+3)",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10(+3+3+3)",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10(+3+3+3)",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "dumbbell_lateral_raise_21s",
          "name": "Dumbbell Lateral Raise 21s",
          "note": "3 sets x 7/7/7 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "7/7/7",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "7/7/7",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "7/7/7",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "neck_flexion_extension_optional_",
          "name": "Neck Flexion/Extension (Optional)",
          "note": "3 sets x 10/10 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10/10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10/10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10/10",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk2_day6",
      "week": 2,
      "dayNumber": 6,
      "name": "Pull 2",
      "exercises": [
        {
          "key": "omni_grip_lat_pulldown",
          "name": "Omni-Grip Lat Pulldown",
          "note": "3 sets x 10-12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "chest_supported_row",
          "name": "Chest-Supported Row",
          "note": "3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "seated_face_pull",
          "name": "Seated Face Pull",
          "note": "4 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a1",
          "name": "A1",
          "note": "EZ Bar Pronated Curl: 3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a2",
          "name": "A2",
          "note": "EZ Bar Supinated Curl: 3 sets x 10+ reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10+",
              "suggestedRpe": 10,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10+",
              "suggestedRpe": 10,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10+",
              "suggestedRpe": 10,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "b1",
          "name": "B1",
          "note": "Reverse Pec Deck (Protracted Scapulae): 2 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "b2",
          "name": "B2",
          "note": "Reverse Pec Deck (Protraction/Retraction ROM): 2 sets x 12-15 reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 10,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 10,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk3_day1",
      "week": 3,
      "dayNumber": 1,
      "name": "Full Body 1",
      "exercises": [
        {
          "key": "back_squat",
          "name": "Back Squat",
          "note": "1 set x 4 reps @ 80-85% 1RM, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 7,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "front_squat_or_box_squat_",
          "name": "Front Squat [or Box Squat]",
          "note": "3 sets x 8 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 7,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 7,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 7,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_bench_press",
          "name": "Barbell Bench Press",
          "note": "1 set x 2 reps @ 87.5-90% 1RM, RPE 8.5",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "2",
              "suggestedRpe": 8.5,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 7,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 7,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "weighted_pull_up",
          "name": "Weighted Pull-Up",
          "note": "3 sets x 4-6 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "glute_ham_raise_or_nordic_ham_curl_",
          "name": "Glute-Ham Raise [or Nordic Ham Curl]",
          "note": "3 sets x 6-8 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 7,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 7,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 7,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "seated_face_pull",
          "name": "Seated Face Pull",
          "note": "4 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk3_day2",
      "week": 3,
      "dayNumber": 2,
      "name": "Full Body 2",
      "exercises": [
        {
          "key": "deadlift",
          "name": "Deadlift",
          "note": "3 sets x 5 reps @ 80% 1RM, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 7,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 7,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 7,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_overhead_press",
          "name": "Barbell Overhead Press",
          "note": "4 sets x 6 reps @ 75% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "bulgarian_split_squat",
          "name": "Bulgarian Split Squat",
          "note": "2 sets x 8-10 reps (each leg), RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "meadows_row",
          "name": "Meadows Row",
          "note": "4 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "barbell_or_ez_bar_curl",
          "name": "Barbell or EZ Bar Curl",
          "note": "3 sets x 8-10 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "pec_flye",
          "name": "Pec Flye",
          "note": "2 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk3_day3",
      "week": 3,
      "dayNumber": 3,
      "name": "Full Body 3",
      "exercises": [
        {
          "key": "back_squat",
          "name": "Back Squat",
          "note": "1 set x 8 reps @ 72.5-77.5% 1RM, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 7,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "pin_squat",
          "name": "Pin Squat",
          "note": "2 sets x 5 reps @ 70% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_bench_press",
          "name": "Barbell Bench Press",
          "note": "1 set x 1 rep @ 90-95% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "chin_up",
          "name": "Chin-Up",
          "note": "3 sets x AMRAP (stop at RPE 8), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "single_leg_hip_thrust",
          "name": "Single-Leg Hip Thrust",
          "note": "2 sets x 10-12 reps (each leg), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "cable_reverse_flye",
          "name": "Cable Reverse Flye",
          "note": "4 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk3_day4",
      "week": 3,
      "dayNumber": 4,
      "name": "Full Body 4",
      "exercises": [
        {
          "key": "4_block_pull",
          "name": "4\" Block Pull",
          "note": "2 sets x 5 reps @ 90% 1RM, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "pause_db_incline_press",
          "name": "Pause DB Incline Press",
          "note": "4 sets x 6-8 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "leg_curl_choice_",
          "name": "Leg Curl (Choice)",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "chest_supported_row",
          "name": "Chest-Supported Row",
          "note": "4 sets x 10-12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "rope_overhead_triceps_extension",
          "name": "Rope Overhead Triceps Extension",
          "note": "4 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "egyptian_lateral_raise",
          "name": "Egyptian Lateral Raise",
          "note": "4 sets x 8-10 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk3_day5",
      "week": 3,
      "dayNumber": 5,
      "name": "Full Body 5 - Pump Day",
      "exercises": [
        {
          "key": "a1",
          "name": "A1",
          "note": "Hammer Curl: 4 sets x 8-10 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a2",
          "name": "A2",
          "note": "Single-Arm Overhead Triceps Extension: 4 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "b1",
          "name": "B1",
          "note": "Cable Curl: 3 sets x 20 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "20",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "b2",
          "name": "B2",
          "note": "Cable Triceps Kickback: 3 sets x 20 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "20",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "enhanced_eccentric_calf_raise",
          "name": "Enhanced-Eccentric Calf Raise",
          "note": "3 sets x 8 reps (each leg), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "c1",
          "name": "C1",
          "note": "Plate Shrug: 3 sets x 15-20 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "c2",
          "name": "C2",
          "note": "Neck Flexion/Extension (Optional): 3 sets x 15/15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk4_day1",
      "week": 4,
      "dayNumber": 1,
      "name": "Legs 1",
      "exercises": [
        {
          "key": "back_squat",
          "name": "Back Squat",
          "note": "4 sets x 4 reps @ 75-80% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_rdl",
          "name": "Barbell RDL",
          "note": "3 sets x 10 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 7,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 7,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 7,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "unilateral_leg_press",
          "name": "Unilateral Leg Press",
          "note": "2 sets x 12-15 reps (each leg), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "eccentric_accentuated_leg_extension",
          "name": "Eccentric-Accentuated Leg Extension",
          "note": "2 sets x 10-12 reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 10,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "leg_curl_choice_",
          "name": "Leg Curl (Choice)",
          "note": "2 sets x 10/15 reps (Dropset), RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10/15",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10/15",
              "suggestedRpe": 10,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "standing_calf_raise",
          "name": "Standing Calf Raise",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "a1",
          "name": "A1",
          "note": "Weighted Crunch: 3 sets x 10-12 reps (each side), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a2",
          "name": "A2",
          "note": "Long-Lever Plank (Optional): 3 sets x 30 sec, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk4_day2",
      "week": 4,
      "dayNumber": 2,
      "name": "Push 1",
      "exercises": [
        {
          "key": "barbell_bench_press",
          "name": "Barbell Bench Press",
          "note": "3 sets x 8 reps @ 72.5% 1RM, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 7,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 7,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 7,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "machine_shoulder_press",
          "name": "Machine Shoulder Press",
          "note": "3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "dip",
          "name": "Dip",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "eccentric_accentuated_barbell_skull_crusher",
          "name": "Eccentric-Accentuated Barbell Skull Crusher",
          "note": "3 sets x 8-10 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "egyptian_lateral_raise",
          "name": "Egyptian Lateral Raise",
          "note": "3 sets x 8-10(+4+4) reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10(+4+4)",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10(+4+4)",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10(+4+4)",
              "suggestedRpe": 10,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "constant_tension_cable_triceps_kickback",
          "name": "Constant-Tension Cable Triceps Kickback",
          "note": "2 sets x 20-30 reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "20-30",
              "suggestedRpe": 10,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "20-30",
              "suggestedRpe": 10,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk4_day3",
      "week": 4,
      "dayNumber": 3,
      "name": "Pull 1",
      "exercises": [
        {
          "key": "weighted_pull_up",
          "name": "Weighted Pull-Up",
          "note": "3 sets x 4-6 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "seated_cable_row",
          "name": "Seated Cable Row",
          "note": "3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "constant_tension_cable_kneeling_pullover",
          "name": "Constant-Tension Cable Kneeling Pullover",
          "note": "3 sets x 15-25 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-25",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-25",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-25",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "hammer_cheat_curl",
          "name": "Hammer \"Cheat\" Curl",
          "note": "4 sets x 8-10 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "incline_dumbbell_curl",
          "name": "Incline Dumbbell Curl",
          "note": "2 sets x 20-30 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "20-30",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "20-30",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "incline_dumbbell_shrug",
          "name": "Incline Dumbbell Shrug",
          "note": "3 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk4_day4",
      "week": 4,
      "dayNumber": 4,
      "name": "Legs 2",
      "exercises": [
        {
          "key": "reset_deadlift",
          "name": "Reset Deadlift",
          "note": "3 sets x 4 reps @ 80-85% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "hack_squat",
          "name": "Hack Squat",
          "note": "3 sets x 12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "single_leg_hip_thrust",
          "name": "Single-Leg Hip Thrust",
          "note": "2 sets x 10-12 reps (each leg), RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a1",
          "name": "A1",
          "note": "Glute-Ham Raise [or Nordic Ham Curl]: 3 sets x 6-8 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a2",
          "name": "A2",
          "note": "Prisoner Back Extension: 3 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "unilateral_standing_calf_raise",
          "name": "Unilateral Standing Calf Raise",
          "note": "3 sets x 8-10 reps (each leg), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "l_sit_hold",
          "name": "L-Sit Hold",
          "note": "3 sets x 15-25 sec, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk4_day5",
      "week": 4,
      "dayNumber": 5,
      "name": "Push 2",
      "exercises": [
        {
          "key": "barbell_overhead_press",
          "name": "Barbell Overhead Press",
          "note": "3 sets x 4 reps @ 77.5-82.5% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "close_grip_bench_press",
          "name": "Close-Grip Bench Press",
          "note": "3 sets x 11 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "11",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "11",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "11",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "pec_flye",
          "name": "Pec Flye",
          "note": "3 sets x 12/20 reps (Dropset on last set), RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12/20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12/20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12/20",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "rope_overhead_triceps_extension",
          "name": "Rope Overhead Triceps Extension",
          "note": "3 sets x 10(+3+3+3) reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10(+3+3+3)",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10(+3+3+3)",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10(+3+3+3)",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "dumbbell_lateral_raise_21s",
          "name": "Dumbbell Lateral Raise 21s",
          "note": "3 sets x 7/7/7 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "7/7/7",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "7/7/7",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "7/7/7",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "neck_flexion_extension_optional_",
          "name": "Neck Flexion/Extension (Optional)",
          "note": "3 sets x 10/10 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10/10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10/10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10/10",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk4_day6",
      "week": 4,
      "dayNumber": 6,
      "name": "Pull 2",
      "exercises": [
        {
          "key": "omni_grip_lat_pulldown",
          "name": "Omni-Grip Lat Pulldown",
          "note": "3 sets x 10-12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "chest_supported_row",
          "name": "Chest-Supported Row",
          "note": "3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "seated_face_pull",
          "name": "Seated Face Pull",
          "note": "4 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a1",
          "name": "A1",
          "note": "EZ Bar Pronated Curl: 3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a2",
          "name": "A2",
          "note": "EZ Bar Supinated Curl: 3 sets x 10+ reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10+",
              "suggestedRpe": 10,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10+",
              "suggestedRpe": 10,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10+",
              "suggestedRpe": 10,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "b1",
          "name": "B1",
          "note": "Reverse Pec Deck (Protracted Scapulae): 2 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "b2",
          "name": "B2",
          "note": "Reverse Pec Deck (Protraction/Retraction ROM): 2 sets x 12-15 reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 10,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 10,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk5_day1",
      "week": 5,
      "dayNumber": 1,
      "name": "Full Body 1",
      "exercises": [
        {
          "key": "back_squat",
          "name": "Back Squat",
          "note": "1 set x 5 reps @ 80-85% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "front_squat_or_box_squat_",
          "name": "Front Squat [or Box Squat]",
          "note": "3 sets x 8 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 7,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 7,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 7,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_bench_press",
          "name": "Barbell Bench Press",
          "note": "1 set x 5 reps @ 80-85% 1RM, RPE 8.5",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8.5,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "2",
              "suggestedRpe": 7,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "2",
              "suggestedRpe": 7,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "weighted_pull_up",
          "name": "Weighted Pull-Up",
          "note": "3 sets x 4-6 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "glute_ham_raise_or_nordic_ham_curl_",
          "name": "Glute-Ham Raise [or Nordic Ham Curl]",
          "note": "3 sets x 6-8 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 7,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 7,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 7,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "seated_face_pull",
          "name": "Seated Face Pull",
          "note": "4 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk5_day2",
      "week": 5,
      "dayNumber": 2,
      "name": "Full Body 2",
      "exercises": [
        {
          "key": "deadlift",
          "name": "Deadlift",
          "note": "2 sets x 5 reps @ 82.5% 1RM, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 7,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 7,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_overhead_press",
          "name": "Barbell Overhead Press",
          "note": "4 sets x 7 reps @ 75% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "7",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "7",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "7",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "7",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "bulgarian_split_squat",
          "name": "Bulgarian Split Squat",
          "note": "2 sets x 8-10 reps (each leg), RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "meadows_row",
          "name": "Meadows Row",
          "note": "4 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "barbell_or_ez_bar_curl",
          "name": "Barbell or EZ Bar Curl",
          "note": "3 sets x 8-10 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "pec_flye",
          "name": "Pec Flye",
          "note": "2 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk5_day3",
      "week": 5,
      "dayNumber": 3,
      "name": "Full Body 3",
      "exercises": [
        {
          "key": "back_squat",
          "name": "Back Squat",
          "note": "1 set x 10 reps @ 72.5-77.5% 1RM, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 7,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "pin_squat",
          "name": "Pin Squat",
          "note": "2 sets x 6 reps @ 70% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_bench_press",
          "name": "Barbell Bench Press",
          "note": "1 set x 1 rep @ 92.5-97.5% 1RM, RPE 8.5",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8.5,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "chin_up",
          "name": "Chin-Up",
          "note": "3 sets x AMRAP (stop at RPE 8), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "single_leg_hip_thrust",
          "name": "Single-Leg Hip Thrust",
          "note": "2 sets x 10-12 reps (each leg), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "cable_reverse_flye",
          "name": "Cable Reverse Flye",
          "note": "4 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk5_day4",
      "week": 5,
      "dayNumber": 4,
      "name": "Full Body 4",
      "exercises": [
        {
          "key": "2_block_pull",
          "name": "2\" Block Pull",
          "note": "2 sets x 4 reps @ 90% 1RM, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "pause_db_incline_press",
          "name": "Pause DB Incline Press",
          "note": "4 sets x 6-8 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "leg_curl_choice_",
          "name": "Leg Curl (Choice)",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "chest_supported_row",
          "name": "Chest-Supported Row",
          "note": "4 sets x 10-12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "rope_overhead_triceps_extension",
          "name": "Rope Overhead Triceps Extension",
          "note": "4 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "egyptian_lateral_raise",
          "name": "Egyptian Lateral Raise",
          "note": "4 sets x 8-10 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk5_day5",
      "week": 5,
      "dayNumber": 5,
      "name": "Full Body 5 - Pump Day",
      "exercises": [
        {
          "key": "a1",
          "name": "A1",
          "note": "Hammer Curl: 4 sets x 8-10 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a2",
          "name": "A2",
          "note": "Single-Arm Overhead Triceps Extension: 4 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "b1",
          "name": "B1",
          "note": "Cable Curl: 3 sets x 20 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "20",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "b2",
          "name": "B2",
          "note": "Cable Triceps Kickback: 3 sets x 20 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "20",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "enhanced_eccentric_calf_raise",
          "name": "Enhanced-Eccentric Calf Raise",
          "note": "3 sets x 8 reps (each leg), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "c1",
          "name": "C1",
          "note": "Plate Shrug: 3 sets x 15-20 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "c2",
          "name": "C2",
          "note": "Neck Flexion/Extension (Optional): 3 sets x 15/15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk6_day1",
      "week": 6,
      "dayNumber": 1,
      "name": "Legs 1",
      "exercises": [
        {
          "key": "back_squat",
          "name": "Back Squat",
          "note": "5 sets x 4 reps @ 75-80% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_5",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_rdl",
          "name": "Barbell RDL",
          "note": "3 sets x 10 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "unilateral_leg_press",
          "name": "Unilateral Leg Press",
          "note": "2 sets x 12-15 reps (each leg), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "eccentric_accentuated_leg_extension",
          "name": "Eccentric-Accentuated Leg Extension",
          "note": "2 sets x 10-12 reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 10,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "leg_curl_choice_",
          "name": "Leg Curl (Choice)",
          "note": "2 sets x 10/15 reps (Dropset), RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10/15",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10/15",
              "suggestedRpe": 10,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "standing_calf_raise",
          "name": "Standing Calf Raise",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "a1",
          "name": "A1",
          "note": "Weighted Crunch: 3 sets x 10-12 reps (each side), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a2",
          "name": "A2",
          "note": "Long-Lever Plank (Optional): 3 sets x 30 sec, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk6_day2",
      "week": 6,
      "dayNumber": 2,
      "name": "Push 1",
      "exercises": [
        {
          "key": "barbell_bench_press",
          "name": "Barbell Bench Press",
          "note": "4 sets x 8 reps @ 72.5% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "machine_shoulder_press",
          "name": "Machine Shoulder Press",
          "note": "3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "dip",
          "name": "Dip",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "eccentric_accentuated_barbell_skull_crusher",
          "name": "Eccentric-Accentuated Barbell Skull Crusher",
          "note": "3 sets x 8-10 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "egyptian_lateral_raise",
          "name": "Egyptian Lateral Raise",
          "note": "3 sets x 8-10(+4+4) reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10(+4+4)",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10(+4+4)",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10(+4+4)",
              "suggestedRpe": 10,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "constant_tension_cable_triceps_kickback",
          "name": "Constant-Tension Cable Triceps Kickback",
          "note": "2 sets x 20-30 reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "20-30",
              "suggestedRpe": 10,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "20-30",
              "suggestedRpe": 10,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk6_day3",
      "week": 6,
      "dayNumber": 3,
      "name": "Pull 1",
      "exercises": [
        {
          "key": "weighted_pull_up",
          "name": "Weighted Pull-Up",
          "note": "3 sets x 4-6 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "seated_cable_row",
          "name": "Seated Cable Row",
          "note": "3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "constant_tension_cable_kneeling_pullover",
          "name": "Constant-Tension Cable Kneeling Pullover",
          "note": "3 sets x 15-25 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-25",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-25",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-25",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "hammer_cheat_curl",
          "name": "Hammer \"Cheat\" Curl",
          "note": "4 sets x 8-10 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "incline_dumbbell_curl",
          "name": "Incline Dumbbell Curl",
          "note": "2 sets x 20-30 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "20-30",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "20-30",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "incline_dumbbell_shrug",
          "name": "Incline Dumbbell Shrug",
          "note": "3 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk6_day4",
      "week": 6,
      "dayNumber": 4,
      "name": "Legs 2",
      "exercises": [
        {
          "key": "reset_deadlift",
          "name": "Reset Deadlift",
          "note": "3 sets x 5 reps @ 80-85% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "hack_squat",
          "name": "Hack Squat",
          "note": "3 sets x 12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "single_leg_hip_thrust",
          "name": "Single-Leg Hip Thrust",
          "note": "2 sets x 10-12 reps (each leg), RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a1",
          "name": "A1",
          "note": "Glute-Ham Raise [or Nordic Ham Curl]: 3 sets x 6-8 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a2",
          "name": "A2",
          "note": "Prisoner Back Extension: 3 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "unilateral_standing_calf_raise",
          "name": "Unilateral Standing Calf Raise",
          "note": "3 sets x 8-10 reps (each leg), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "l_sit_hold",
          "name": "L-Sit Hold",
          "note": "3 sets x 20-30 sec, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk6_day5",
      "week": 6,
      "dayNumber": 5,
      "name": "Push 2",
      "exercises": [
        {
          "key": "barbell_overhead_press",
          "name": "Barbell Overhead Press",
          "note": "4 sets x 4 reps @ 77.5-82.5% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "close_grip_bench_press",
          "name": "Close-Grip Bench Press",
          "note": "3 sets x 12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "pec_flye",
          "name": "Pec Flye",
          "note": "3 sets x 12/20 reps (Dropset on last set), RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12/20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12/20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12/20",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "rope_overhead_triceps_extension",
          "name": "Rope Overhead Triceps Extension",
          "note": "3 sets x 10(+3+3+3) reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10(+3+3+3)",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10(+3+3+3)",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10(+3+3+3)",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "dumbbell_lateral_raise_21s",
          "name": "Dumbbell Lateral Raise 21s",
          "note": "3 sets x 7/7/7 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "7/7/7",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "7/7/7",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "7/7/7",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "neck_flexion_extension_optional_",
          "name": "Neck Flexion/Extension (Optional)",
          "note": "3 sets x 10/10 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10/10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10/10",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10/10",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk6_day6",
      "week": 6,
      "dayNumber": 6,
      "name": "Pull 2",
      "exercises": [
        {
          "key": "omni_grip_lat_pulldown",
          "name": "Omni-Grip Lat Pulldown",
          "note": "3 sets x 10-12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "chest_supported_row",
          "name": "Chest-Supported Row",
          "note": "3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "seated_face_pull",
          "name": "Seated Face Pull",
          "note": "4 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a1",
          "name": "A1",
          "note": "EZ Bar Pronated Curl: 3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a2",
          "name": "A2",
          "note": "EZ Bar Supinated Curl: 3 sets x 10+ reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10+",
              "suggestedRpe": 10,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10+",
              "suggestedRpe": 10,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10+",
              "suggestedRpe": 10,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "b1",
          "name": "B1",
          "note": "Reverse Pec Deck (Protracted Scapulae): 2 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "b2",
          "name": "B2",
          "note": "Reverse Pec Deck (Protraction/Retraction ROM): 2 sets x 12-15 reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 10,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 10,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk7_day1",
      "week": 7,
      "dayNumber": 1,
      "name": "Full Body 1",
      "exercises": [
        {
          "key": "back_squat",
          "name": "Back Squat",
          "note": "4 sets x 3 reps @ 82.5-87.5% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "3",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "3",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "3",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "3",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_bench_press",
          "name": "Barbell Bench Press",
          "note": "3 sets x 8 reps @ 75% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "wide_grip_lat_pulldown",
          "name": "Wide-Grip Lat Pulldown",
          "note": "4 sets x 6-8 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "sliding_leg_curl",
          "name": "Sliding Leg Curl",
          "note": "2 sets x 10-12 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 7,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 7,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "wall_slide",
          "name": "Wall Slide",
          "note": "3 sets x 15-20 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 7,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 7,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 7,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk7_day2",
      "week": 7,
      "dayNumber": 2,
      "name": "Full Body 2",
      "exercises": [
        {
          "key": "opposite_stance_deadlift",
          "name": "Opposite Stance Deadlift",
          "note": "3 sets x 5 reps @ 75-80% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_overhead_press",
          "name": "Barbell Overhead Press",
          "note": "2 sets x 8 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "leg_press",
          "name": "Leg Press",
          "note": "2 sets x 10-12 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 7,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 7,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "seated_cable_row",
          "name": "Seated Cable Row",
          "note": "3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "hammer_curl",
          "name": "Hammer Curl",
          "note": "3 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "barbell_or_dumbbell_isometric_hold",
          "name": "Barbell or Dumbbell Isometric Hold",
          "note": "2 sets x 20-30 sec, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk7_day3",
      "week": 7,
      "dayNumber": 3,
      "name": "Full Body 3",
      "exercises": [
        {
          "key": "front_squat",
          "name": "Front Squat",
          "note": "3 sets x 8 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 7,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 7,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 7,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "pause_barbell_bench_press",
          "name": "Pause Barbell Bench Press",
          "note": "3 sets x 2 reps @ 87.5% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "2",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "2",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "2",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "weighted_neutral_grip_pull_up",
          "name": "Weighted Neutral-Grip Pull-Up",
          "note": "4 sets x 4-6 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "leg_curl_choice_",
          "name": "Leg Curl (Choice)",
          "note": "3 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "prone_trap_raise",
          "name": "Prone Trap Raise",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "hanging_leg_raise",
          "name": "Hanging Leg Raise",
          "note": "3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk7_day4",
      "week": 7,
      "dayNumber": 4,
      "name": "Full Body 4",
      "exercises": [
        {
          "key": "1_block_pull",
          "name": "1\" Block Pull",
          "note": "2 sets x 4 reps @ 90% 1RM, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "dip",
          "name": "Dip",
          "note": "3 sets x 8-10 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 7,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 7,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 7,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "one_arm_row",
          "name": "One-Arm Row",
          "note": "3 sets x 10-12 reps (each arm), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "triceps_pressdown_21s",
          "name": "Triceps Pressdown 21s",
          "note": "3 sets x 7/7/7 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "7/7/7",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "7/7/7",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "7/7/7",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "db_lateral_raise",
          "name": "DB Lateral Raise",
          "note": "3 sets x 15-20 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk7_day5",
      "week": 7,
      "dayNumber": 5,
      "name": "Full Body 5 - Pump Day",
      "exercises": [
        {
          "key": "a1",
          "name": "A1",
          "note": "Eccentric-Accentuated EZ/BB Curl: 4 sets x 8-10 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a2",
          "name": "A2",
          "note": "Rope Overhead Triceps Extension: 4 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "b1",
          "name": "B1",
          "note": "Concentration Curl: 4 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "b2",
          "name": "B2",
          "note": "DB Lateral Raise Swing: 4 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "c1",
          "name": "C1",
          "note": "Standing Calf Raise: 3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "c2",
          "name": "C2",
          "note": "L-Sit Hold: 3 sets x 10-20 sec, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "neck_flexion_extension_optional_",
          "name": "Neck Flexion/Extension (Optional)",
          "note": "3 sets x 15/15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk8_day1",
      "week": 8,
      "dayNumber": 1,
      "name": "Legs 1",
      "exercises": [
        {
          "key": "pin_squat",
          "name": "Pin Squat",
          "note": "2 sets x 4 reps @ 72.5% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_rdl",
          "name": "Barbell RDL",
          "note": "2 sets x 8 reps, RPE 6",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 6,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 6,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a1",
          "name": "A1",
          "note": "Sissy Squat: 2 sets x 10-12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_5",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a2",
          "name": "A2",
          "note": "Nordic Ham Curl: 2 sets x 6-8 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_5",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "unilateral_standing_calf_raise",
          "name": "Unilateral Standing Calf Raise",
          "note": "3 sets x 10-12 reps (each leg), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "hip_abduction",
          "name": "Hip Abduction",
          "note": "3 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk8_day2",
      "week": 8,
      "dayNumber": 2,
      "name": "Push 1",
      "exercises": [
        {
          "key": "larsen_press",
          "name": "Larsen Press",
          "note": "3 sets x 10 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 7,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 7,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 7,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "machine_shoulder_press",
          "name": "Machine Shoulder Press",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "close_grip_incline_barbell_bench_press",
          "name": "Close-Grip Incline Barbell Bench Press",
          "note": "2 sets x 10-12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "triceps_pressdown",
          "name": "Triceps Pressdown",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "lateral_raise_choice_",
          "name": "Lateral Raise (Choice)",
          "note": "3 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "neck_flexion_extension_optional_",
          "name": "Neck Flexion/Extension (Optional)",
          "note": "3 sets x 15/15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk8_day3",
      "week": 8,
      "dayNumber": 3,
      "name": "Pull 1",
      "exercises": [
        {
          "key": "chest_supported_row",
          "name": "Chest-Supported Row",
          "note": "3 sets x 10-12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "single_arm_pulldown",
          "name": "Single-Arm Pulldown",
          "note": "3 sets x 8-10 reps (each arm), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "helms_row",
          "name": "Helms Row",
          "note": "2 sets x 15-20 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "bayesian_curl",
          "name": "Bayesian Curl",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "inverse_zottman_curl",
          "name": "Inverse Zottman Curl",
          "note": "2 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "band_pull_apart",
          "name": "Band Pull-Apart",
          "note": "2 sets x 25-30 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "25-30",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "25-30",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk8_day4",
      "week": 8,
      "dayNumber": 4,
      "name": "Legs 2",
      "exercises": [
        {
          "key": "deadlift",
          "name": "Deadlift",
          "note": "2 sets x 5 reps @ 75% 1RM, RPE 6",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 6,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 6,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "hack_squat",
          "name": "Hack Squat",
          "note": "2 sets x 12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "cable_pull_through",
          "name": "Cable Pull-Through",
          "note": "2 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "leg_extension",
          "name": "Leg Extension",
          "note": "2 sets x 15/10 reps (Dropset), RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15/10",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15/10",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "unilateral_leg_curl_choice_",
          "name": "Unilateral Leg Curl (Choice)",
          "note": "3 sets x 10-12 reps (each leg), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "standing_calf_raise",
          "name": "Standing Calf Raise",
          "note": "3 sets x 10-12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "l_sit_hold",
          "name": "L-Sit Hold",
          "note": "3 sets x 20-30 sec, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 7,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk8_day5",
      "week": 8,
      "dayNumber": 5,
      "name": "Push 2",
      "exercises": [
        {
          "key": "barbell_overhead_press",
          "name": "Barbell Overhead Press",
          "note": "4 sets x 4 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "4",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "deficit_push_up",
          "name": "Deficit Push-Up",
          "note": "1 set x AMRAP, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "multi_height_cable_crossover",
          "name": "Multi-Height Cable Crossover",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "egyptian_lateral_raise",
          "name": "Egyptian Lateral Raise",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "cable_triceps_kickback",
          "name": "Cable Triceps Kickback",
          "note": "3 sets x 20-25 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "20-25",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "20-25",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "20-25",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "dumbbell_lateral_raise_iso_hold",
          "name": "Dumbbell Lateral Raise Iso-Hold",
          "note": "2 sets x 45 sec, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk8_day6",
      "week": 8,
      "dayNumber": 6,
      "name": "Pull 2",
      "exercises": [
        {
          "key": "weighted_eccentric_overload_pull_up",
          "name": "Weighted Eccentric-Overload Pull-Up",
          "note": "1 set x 5 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "eccentric_accentuated_pull_up",
          "name": "Eccentric-Accentuated Pull-Up",
          "note": "2 sets x 6-8 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "pendlay_row_bent_over_row",
          "name": "Pendlay Row / Bent Over Row",
          "note": "3 sets x 5/10 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "5/10",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "5/10",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "5/10",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "machine_strict_form_row",
          "name": "Machine \"Strict Form\" Row",
          "note": "2 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "cable_reverse_flye",
          "name": "Cable Reverse Flye",
          "note": "3 sets x 15-20 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "barbell_or_ez_bar_curl",
          "name": "Barbell or EZ Bar Curl",
          "note": "3 sets x 10-12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "pinch_grip_curl",
          "name": "Pinch Grip Curl",
          "note": "2 sets x 15-20 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk9_day1",
      "week": 9,
      "dayNumber": 1,
      "name": "Full Body 1",
      "exercises": [
        {
          "key": "back_squat",
          "name": "Back Squat",
          "note": "4 sets x 2 reps @ 85-90% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "2",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "2",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "2",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "2",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_bench_press",
          "name": "Barbell Bench Press",
          "note": "3 sets x 6 reps @ 77.5% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "wide_grip_lat_pulldown",
          "name": "Wide-Grip Lat Pulldown",
          "note": "4 sets x 6-8 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "sliding_leg_curl",
          "name": "Sliding Leg Curl",
          "note": "2 sets x 10-12 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 7,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 7,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "wall_slide",
          "name": "Wall Slide",
          "note": "3 sets x 15-20 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 7,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 7,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 7,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk9_day2",
      "week": 9,
      "dayNumber": 2,
      "name": "Full Body 2",
      "exercises": [
        {
          "key": "opposite_stance_deadlift",
          "name": "Opposite Stance Deadlift",
          "note": "2 sets x 2 reps @ 75% 1RM, RPE 3",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "2",
              "suggestedRpe": 3,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "2",
              "suggestedRpe": 3,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_overhead_press",
          "name": "Barbell Overhead Press",
          "note": "3 sets x 8 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "leg_press",
          "name": "Leg Press",
          "note": "2 sets x 10-12 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 7,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 7,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "seated_cable_row",
          "name": "Seated Cable Row",
          "note": "3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "hammer_curl",
          "name": "Hammer Curl",
          "note": "3 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "barbell_or_dumbbell_isometric_hold",
          "name": "Barbell or Dumbbell Isometric Hold",
          "note": "2 sets x 20-30 sec, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk9_day3",
      "week": 9,
      "dayNumber": 3,
      "name": "Full Body 3",
      "exercises": [
        {
          "key": "front_squat",
          "name": "Front Squat",
          "note": "2 sets x 8 reps, RPE 6",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 6,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 6,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "pause_barbell_bench_press",
          "name": "Pause Barbell Bench Press",
          "note": "3 sets x 2 reps @ 90% 1RM, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "2",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "2",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "2",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "weighted_neutral_grip_pull_up",
          "name": "Weighted Neutral-Grip Pull-Up",
          "note": "4 sets x 4-6 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "leg_curl_choice_",
          "name": "Leg Curl (Choice)",
          "note": "3 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "prone_trap_raise",
          "name": "Prone Trap Raise",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "hanging_leg_raise",
          "name": "Hanging Leg Raise",
          "note": "3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk9_day4",
      "week": 9,
      "dayNumber": 4,
      "name": "Full Body 4",
      "exercises": [
        {
          "key": "deadlift",
          "name": "Deadlift",
          "note": "1 set x AMRAP @ 90% 1RM, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 9,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "dip",
          "name": "Dip",
          "note": "3 sets x 8-10 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 7,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 7,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 7,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "one_arm_row",
          "name": "One-Arm Row",
          "note": "3 sets x 10-12 reps (each arm), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "triceps_pressdown_21s",
          "name": "Triceps Pressdown 21s",
          "note": "3 sets x 7/7/7 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "7/7/7",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "7/7/7",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "7/7/7",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "db_lateral_raise",
          "name": "DB Lateral Raise",
          "note": "3 sets x 15-20 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk9_day5",
      "week": 9,
      "dayNumber": 5,
      "name": "Full Body 5 - Pump Day",
      "exercises": [
        {
          "key": "a1",
          "name": "A1",
          "note": "Eccentric-Accentuated EZ/BB Curl: 4 sets x 8-10 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a2",
          "name": "A2",
          "note": "Rope Overhead Triceps Extension: 4 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "b1",
          "name": "B1",
          "note": "Concentration Curl: 4 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "b2",
          "name": "B2",
          "note": "DB Lateral Raise Swing: 4 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "c1",
          "name": "C1",
          "note": "Standing Calf Raise: 3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "c2",
          "name": "C2",
          "note": "L-Sit Hold: 3 sets x 10-20 sec, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "neck_flexion_extension_optional_",
          "name": "Neck Flexion/Extension (Optional)",
          "note": "3 sets x 15/15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk10_day1",
      "week": 10,
      "dayNumber": 1,
      "name": "Legs 1",
      "exercises": [
        {
          "key": "pin_squat",
          "name": "Pin Squat",
          "note": "2 sets x 5 reps @ 72.5% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_rdl",
          "name": "Barbell RDL",
          "note": "3 sets x 10 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a1",
          "name": "A1",
          "note": "Sissy Squat: 3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_5",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_6",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a2",
          "name": "A2",
          "note": "Nordic Ham Curl: 3 sets x 6-8 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_5",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_6",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "unilateral_standing_calf_raise",
          "name": "Unilateral Standing Calf Raise",
          "note": "3 sets x 10-12 reps (each leg), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "hip_abduction",
          "name": "Hip Abduction",
          "note": "3 sets x 12-15 reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 10,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 10,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 10,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk10_day2",
      "week": 10,
      "dayNumber": 2,
      "name": "Push 1",
      "exercises": [
        {
          "key": "larsen_press",
          "name": "Larsen Press",
          "note": "4 sets x 10 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 7,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 7,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 7,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 7,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "machine_shoulder_press",
          "name": "Machine Shoulder Press",
          "note": "3 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "close_grip_incline_barbell_bench_press",
          "name": "Close-Grip Incline Barbell Bench Press",
          "note": "3 sets x 10-12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "triceps_pressdown",
          "name": "Triceps Pressdown",
          "note": "4 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "lateral_raise_choice_",
          "name": "Lateral Raise (Choice)",
          "note": "4 sets x 15-20 reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 10,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "neck_flexion_extension_optional_",
          "name": "Neck Flexion/Extension (Optional)",
          "note": "3 sets x 15/15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk10_day3",
      "week": 10,
      "dayNumber": 3,
      "name": "Pull 1",
      "exercises": [
        {
          "key": "chest_supported_row",
          "name": "Chest-Supported Row",
          "note": "4 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "single_arm_pulldown",
          "name": "Single-Arm Pulldown",
          "note": "4 sets x 8-10 reps (each arm), RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "helms_row",
          "name": "Helms Row",
          "note": "3 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "bayesian_curl",
          "name": "Bayesian Curl",
          "note": "3 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "inverse_zottman_curl",
          "name": "Inverse Zottman Curl",
          "note": "2 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "band_pull_apart",
          "name": "Band Pull-Apart",
          "note": "2 sets x 25-30 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "25-30",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "25-30",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk10_day4",
      "week": 10,
      "dayNumber": 4,
      "name": "Legs 2",
      "exercises": [
        {
          "key": "deadlift",
          "name": "Deadlift",
          "note": "2 sets x 6 reps @ 75-80% 1RM, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 7,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 7,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "hack_squat",
          "name": "Hack Squat",
          "note": "3 sets x 12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "cable_pull_through",
          "name": "Cable Pull-Through",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "leg_extension",
          "name": "Leg Extension",
          "note": "2 sets x 15/10 reps (Dropset), RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15/10",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15/10",
              "suggestedRpe": 10,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "unilateral_leg_curl_choice_",
          "name": "Unilateral Leg Curl (Choice)",
          "note": "3 sets x 10-12 reps (each leg), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "standing_calf_raise",
          "name": "Standing Calf Raise",
          "note": "3 sets x 10-12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "l_sit_hold",
          "name": "L-Sit Hold",
          "note": "3 sets x 20-30 sec, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 7,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk10_day5",
      "week": 10,
      "dayNumber": 5,
      "name": "Push 2",
      "exercises": [
        {
          "key": "barbell_overhead_press",
          "name": "Barbell Overhead Press",
          "note": "4 sets x 5 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "deficit_push_up",
          "name": "Deficit Push-Up",
          "note": "2 sets x AMRAP, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "multi_height_cable_crossover",
          "name": "Multi-Height Cable Crossover",
          "note": "3 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "egyptian_lateral_raise",
          "name": "Egyptian Lateral Raise",
          "note": "3 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "cable_triceps_kickback",
          "name": "Cable Triceps Kickback",
          "note": "3 sets x 20-25 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "20-25",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "20-25",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "20-25",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "dumbbell_lateral_raise_iso_hold",
          "name": "Dumbbell Lateral Raise Iso-Hold",
          "note": "2 sets x 45 sec, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk10_day6",
      "week": 10,
      "dayNumber": 6,
      "name": "Pull 2",
      "exercises": [
        {
          "key": "weighted_eccentric_overload_pull_up",
          "name": "Weighted Eccentric-Overload Pull-Up",
          "note": "1 set x 5 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "eccentric_accentuated_pull_up",
          "name": "Eccentric-Accentuated Pull-Up",
          "note": "2 sets x 6-8 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "pendlay_row_bent_over_row",
          "name": "Pendlay Row / Bent Over Row",
          "note": "3 sets x 5/10 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "5/10",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "5/10",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "5/10",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "machine_strict_form_row",
          "name": "Machine \"Strict Form\" Row",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "cable_reverse_flye",
          "name": "Cable Reverse Flye",
          "note": "3 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "barbell_or_ez_bar_curl",
          "name": "Barbell or EZ Bar Curl",
          "note": "3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "pinch_grip_curl",
          "name": "Pinch Grip Curl",
          "note": "2 sets x 15-20 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk11_day1",
      "week": 11,
      "dayNumber": 1,
      "name": "Full Body 1",
      "exercises": [
        {
          "key": "back_squat",
          "name": "Back Squat",
          "note": "3 sets x 1 rep @ 90-95% 1RM, RPE 8.5",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8.5,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_bench_press",
          "name": "Barbell Bench Press",
          "note": "3 sets x 6 reps @ 80% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "wide_grip_lat_pulldown",
          "name": "Wide-Grip Lat Pulldown",
          "note": "4 sets x 6-8 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "sliding_leg_curl",
          "name": "Sliding Leg Curl",
          "note": "2 sets x 10-12 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 7,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 7,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "wall_slide",
          "name": "Wall Slide",
          "note": "3 sets x 15-20 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 7,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 7,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 7,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk11_day2",
      "week": 11,
      "dayNumber": 2,
      "name": "Full Body 2",
      "exercises": [
        {
          "key": "opposite_stance_deadlift",
          "name": "Opposite Stance Deadlift",
          "note": "3 sets x 3 reps @ 80-85% 1RM, RPE 6",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "3",
              "suggestedRpe": 6,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "3",
              "suggestedRpe": 6,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "3",
              "suggestedRpe": 6,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_overhead_press",
          "name": "Barbell Overhead Press",
          "note": "4 sets x 8 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "leg_press",
          "name": "Leg Press",
          "note": "2 sets x 10-12 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 7,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 7,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "seated_cable_row",
          "name": "Seated Cable Row",
          "note": "3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "hammer_curl",
          "name": "Hammer Curl",
          "note": "3 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "barbell_or_dumbbell_isometric_hold",
          "name": "Barbell or Dumbbell Isometric Hold",
          "note": "2 sets x 20-30 sec, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk11_day3",
      "week": 11,
      "dayNumber": 3,
      "name": "Full Body 3",
      "exercises": [
        {
          "key": "front_squat",
          "name": "Front Squat",
          "note": "2 sets x 8 reps, RPE 6",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 6,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8",
              "suggestedRpe": 6,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "pause_barbell_bench_press",
          "name": "Pause Barbell Bench Press",
          "note": "3 sets x 1 rep @ 92.5% 1RM, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "weighted_neutral_grip_pull_up",
          "name": "Weighted Neutral-Grip Pull-Up",
          "note": "4 sets x 4-6 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "4-6",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "leg_curl_choice_",
          "name": "Leg Curl (Choice)",
          "note": "3 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "prone_trap_raise",
          "name": "Prone Trap Raise",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "hanging_leg_raise",
          "name": "Hanging Leg Raise",
          "note": "3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk11_day4",
      "week": 11,
      "dayNumber": 4,
      "name": "Full Body 4",
      "exercises": [
        {
          "key": "deadlift",
          "name": "Deadlift",
          "note": "3 sets x 3 reps @ 85% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "3",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "3",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "3",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "dip",
          "name": "Dip",
          "note": "3 sets x 8-10 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 7,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 7,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 7,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "one_arm_row",
          "name": "One-Arm Row",
          "note": "3 sets x 10-12 reps (each arm), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "triceps_pressdown_21s",
          "name": "Triceps Pressdown 21s",
          "note": "3 sets x 7/7/7 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "7/7/7",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "7/7/7",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "7/7/7",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "db_lateral_raise",
          "name": "DB Lateral Raise",
          "note": "3 sets x 15-20 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk11_day5",
      "week": 11,
      "dayNumber": 5,
      "name": "Full Body 5 - Pump Day",
      "exercises": [
        {
          "key": "a1",
          "name": "A1",
          "note": "Eccentric-Accentuated EZ/BB Curl: 4 sets x 8-10 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a2",
          "name": "A2",
          "note": "Rope Overhead Triceps Extension: 4 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "b1",
          "name": "B1",
          "note": "Concentration Curl: 4 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "b2",
          "name": "B2",
          "note": "DB Lateral Raise Swing: 4 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "c1",
          "name": "C1",
          "note": "Standing Calf Raise: 3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "c2",
          "name": "C2",
          "note": "L-Sit Hold: 3 sets x 10-20 sec, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "neck_flexion_extension_optional_",
          "name": "Neck Flexion/Extension (Optional)",
          "note": "3 sets x 15/15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk12_day1",
      "week": 12,
      "dayNumber": 1,
      "name": "Legs 1",
      "exercises": [
        {
          "key": "pin_squat",
          "name": "Pin Squat",
          "note": "2 sets x 6 reps @ 72.5% 1RM, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "barbell_rdl",
          "name": "Barbell RDL",
          "note": "3 sets x 12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a1",
          "name": "A1",
          "note": "Sissy Squat: 3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_5",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_6",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "a2",
          "name": "A2",
          "note": "Nordic Ham Curl: 3 sets x 6-8 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_5",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_6",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "unilateral_standing_calf_raise",
          "name": "Unilateral Standing Calf Raise",
          "note": "3 sets x 10-12 reps (each leg), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "hip_abduction",
          "name": "Hip Abduction",
          "note": "3 sets x 12-15 reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 10,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 10,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 10,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk12_day2",
      "week": 12,
      "dayNumber": 2,
      "name": "Push 1",
      "exercises": [
        {
          "key": "barbell_bench_press_amrap_",
          "name": "Barbell Bench Press (AMRAP)",
          "note": "1 set x AMRAP @ 85% 1RM, RPE 9-9.5",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "barbell_bench_press_back_off_",
          "name": "Barbell Bench Press (Back Off)",
          "note": "2 sets x 10 reps, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 7,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10",
              "suggestedRpe": 7,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "machine_shoulder_press",
          "name": "Machine Shoulder Press",
          "note": "3 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "close_grip_incline_barbell_bench_press",
          "name": "Close-Grip Incline Barbell Bench Press",
          "note": "3 sets x 10-12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "triceps_pressdown",
          "name": "Triceps Pressdown",
          "note": "4 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "lateral_raise_choice_",
          "name": "Lateral Raise (Choice)",
          "note": "4 sets x 15-20 reps, RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 10,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "neck_flexion_extension_optional_",
          "name": "Neck Flexion/Extension (Optional)",
          "note": "3 sets x 15/15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15/15",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk12_day3",
      "week": 12,
      "dayNumber": 3,
      "name": "Pull 1",
      "exercises": [
        {
          "key": "chest_supported_row",
          "name": "Chest-Supported Row",
          "note": "4 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "single_arm_pulldown",
          "name": "Single-Arm Pulldown",
          "note": "4 sets x 8-10 reps (each arm), RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "8-10",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "helms_row",
          "name": "Helms Row",
          "note": "3 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "bayesian_curl",
          "name": "Bayesian Curl",
          "note": "3 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "inverse_zottman_curl",
          "name": "Inverse Zottman Curl",
          "note": "2 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "band_pull_apart",
          "name": "Band Pull-Apart",
          "note": "2 sets x 25-30 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "25-30",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "25-30",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk12_day4",
      "week": 12,
      "dayNumber": 4,
      "name": "Legs 2",
      "exercises": [
        {
          "key": "deadlift",
          "name": "Deadlift",
          "note": "2 sets x 6 reps @ 75-82.5% 1RM, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 7,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 7,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "hack_squat",
          "name": "Hack Squat",
          "note": "3 sets x 12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 180
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12",
              "suggestedRpe": 8,
              "restSeconds": 180
            }
          ]
        },
        {
          "key": "cable_pull_through",
          "name": "Cable Pull-Through",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "leg_extension",
          "name": "Leg Extension",
          "note": "2 sets x 15/10 reps (Dropset), RPE 10",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15/10",
              "suggestedRpe": 10,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15/10",
              "suggestedRpe": 10,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "unilateral_leg_curl_choice_",
          "name": "Unilateral Leg Curl (Choice)",
          "note": "3 sets x 10-12 reps (each leg), RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "standing_calf_raise",
          "name": "Standing Calf Raise",
          "note": "3 sets x 10-12 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "l_sit_hold",
          "name": "L-Sit Hold",
          "note": "3 sets x 20-30 sec, RPE 7",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 7,
              "restSeconds": 90
            }
          ]
        }
      ]
    },
    {
      "key": "wk12_day5",
      "week": 12,
      "dayNumber": 5,
      "name": "Push 2",
      "exercises": [
        {
          "key": "barbell_overhead_press",
          "name": "Barbell Overhead Press",
          "note": "4 sets x 6 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_4",
              "type": "working",
              "reps": "6",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "deficit_push_up",
          "name": "Deficit Push-Up",
          "note": "2 sets x AMRAP, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "multi_height_cable_crossover",
          "name": "Multi-Height Cable Crossover",
          "note": "3 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "egyptian_lateral_raise",
          "name": "Egyptian Lateral Raise",
          "note": "3 sets x 12-15 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "cable_triceps_kickback",
          "name": "Cable Triceps Kickback",
          "note": "3 sets x 20-25 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "20-25",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "20-25",
              "suggestedRpe": 8,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "20-25",
              "suggestedRpe": 8,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "dumbbell_lateral_raise_iso_hold",
          "name": "Dumbbell Lateral Raise Iso-Hold",
          "note": "2 sets x 45 sec, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "?",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    },
    {
      "key": "wk12_day6",
      "week": 12,
      "dayNumber": 6,
      "name": "Pull 2",
      "exercises": [
        {
          "key": "weighted_eccentric_overload_pull_up",
          "name": "Weighted Eccentric-Overload Pull-Up",
          "note": "1 set x 5 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "5",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "eccentric_accentuated_pull_up",
          "name": "Eccentric-Accentuated Pull-Up",
          "note": "2 sets x 6-8 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "6-8",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "pendlay_row_bent_over_row",
          "name": "Pendlay Row / Bent Over Row",
          "note": "3 sets x 5/10 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "5/10",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "5/10",
              "suggestedRpe": 9,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "5/10",
              "suggestedRpe": 9,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "machine_strict_form_row",
          "name": "Machine \"Strict Form\" Row",
          "note": "3 sets x 12-15 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "12-15",
              "suggestedRpe": 8,
              "restSeconds": 120
            }
          ]
        },
        {
          "key": "cable_reverse_flye",
          "name": "Cable Reverse Flye",
          "note": "3 sets x 15-20 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 9,
              "restSeconds": 90
            }
          ]
        },
        {
          "key": "barbell_or_ez_bar_curl",
          "name": "Barbell or EZ Bar Curl",
          "note": "3 sets x 10-12 reps, RPE 9",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 60
            },
            {
              "key": "set_3",
              "type": "working",
              "reps": "10-12",
              "suggestedRpe": 9,
              "restSeconds": 60
            }
          ]
        },
        {
          "key": "pinch_grip_curl",
          "name": "Pinch Grip Curl",
          "note": "2 sets x 15-20 reps, RPE 8",
          "sets": [
            {
              "key": "set_1",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 60
            },
            {
              "key": "set_2",
              "type": "working",
              "reps": "15-20",
              "suggestedRpe": 8,
              "restSeconds": 60
            }
          ]
        }
      ]
    }
  ]
};
