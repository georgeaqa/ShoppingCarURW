const CHARACTERS = [
  {
    idCharacter: 1,
    nameCharacter: "KATE",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/LEADER/LEADER_KATE_N5_HD_673.png",
    },
    idClan: 33,
  },
  {
    idCharacter: 2,
    nameCharacter: "MEMENTO",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/LEADER/LEADER_MEMENTO_N5_HD_673.png",
    },
    idClan: 33,
  },
  {
    idCharacter: 3,
    nameCharacter: "GENESIS",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/OCULUS/OCULUS_GENESIS_N5_HD_673.png",
    },
    idClan: 34,
  },
  {
    idCharacter: 4,
    nameCharacter: "PHALLOIDE LD",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/OCULUS/OCULUS_PHALLOIDELD_N4_HD_673.png",
    },
    idClan: 34,
  },
  {
    idCharacter: 5,
    nameCharacter: "STRIKER",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/ALLSTARS/ALLSTARS_STRIKERCR_N4_HD_673.png",
    },
    idClan: 1,
  },
  {
    idCharacter: 6,
    nameCharacter: "MARINA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/ALLSTARS/ALLSTARS_MARINA_N4_HD_673.png",
    },
    idClan: 1,
  },
  {
    idCharacter: 7,
    nameCharacter: "LOST HOG",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/FANGPICLANG/FANGPICLANG_LOSTHOGCR_N5_HD_673.png",
    },
    idClan: 2,
  },
  {
    idCharacter: 8,
    nameCharacter: "TOKAMAK",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/FANGPICLANG/FANGPICLANG_TOKAMAK_N5_HD_673.png",
    },
    idClan: 2,
  },
  {
    idCharacter: 9,
    nameCharacter: "NOCTEZUMA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/HURACAN/HURACAN_NOCTEZUMACR_N5_HD_673.png",
    },
    idClan: 3,
  },
  {
    idCharacter: 10,
    nameCharacter: "QUETZAL",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/HURACAN/HURACAN_QUETZALMT_N4_HD_673.png",
    },
    idClan: 3,
  },
  {
    idCharacter: 11,
    nameCharacter: "GENERAL",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/LAJUNTA/LAJUNTA_GENERALMT_N5_HD_673.png",
    },
    idClan: 4,
  },
  {
    idCharacter: 12,
    nameCharacter: "AMIRAL PY",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/LAJUNTA/LAJUNTA_AMIRALPYCR_N3_HD_673.png",
    },
    idClan: 4,
  },
  {
    idCharacter: 13,
    nameCharacter: "ALEC",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/RESCUE/RESCUE_ALECMT_N4_HD_673.png",
    },
    idClan: 5,
  },
  {
    idCharacter: 14,
    nameCharacter: "MARCO",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/RESCUE/RESCUE_MARCOCR_N5_HD_673.png",
    },
    idClan: 5,
  },
  {
    idCharacter: 15,
    nameCharacter: "HAVOK",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/SENTINEL/SENTINEL_HAVOK_N5_HD_673.png",
    },
    idClan: 6,
  },
  {
    idCharacter: 16,
    nameCharacter: "HAWK",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/SENTINEL/SENTINEL_HAWK_N5_HD_673.png",
    },
    idClan: 6,
  },
  {
    idCharacter: 17,
    nameCharacter: "JACKIE",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/UPPERS/UPPERS_JACKIEMT_N4_HD_673.png",
    },
    idClan: 7,
  },
  {
    idCharacter: 18,
    nameCharacter: "ARMANDA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/UPPERS/UPPERS_ARMANDAMT_N3_HD_673.png",
    },
    idClan: 7,
  },
  {
    idCharacter: 19,
    nameCharacter: "SUM SAM",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/BANGERS/BANGERS_SUMSAMCR_N5_HD_673.png",
    },
    idClan: 8,
  },
  {
    idCharacter: 20,
    nameCharacter: "BODENPOWER",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/BANGERS/BANGERS_BODENPOWERCR_N5_HD_673.png",
    },
    idClan: 8,
  },
  {
    idCharacter: 21,
    nameCharacter: "DJ KORR",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/JUNKZ/JUNKZ_DJKORRMT_N5_HD_673.png",
    },
    idClan: 9,
  },
  {
    idCharacter: 22,
    nameCharacter: "GIBSON",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/JUNKZ/JUNKZ_GIBSONCR_N4_HD_673.png",
    },
    idClan: 9,
  },
  {
    idCharacter: 23,
    nameCharacter: "DON",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/MONTANA/MONTANA_DONCR_N5_HD_673.png",
    },
    idClan: 10,
  },
  {
    idCharacter: 24,
    nameCharacter: "LYSE TERIA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/MONTANA/MONTANA_LYSETERIAMT_N3_HD_673.png",
    },
    idClan: 10,
  },
  {
    idCharacter: 25,
    nameCharacter: "CHARLIE",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/PUSSYCATS/PUSSYCATS_CHARLIECR_N5_HD_673.png",
    },
    idClan: 11,
  },
  {
    idCharacter: 26,
    nameCharacter: "YAYOI",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/PUSSYCATS/PUSSYCATS_YAYOICR_N4_HD_673.png",
    },
    idClan: 11,
  },
  {
    idCharacter: 27,
    nameCharacter: "QUEEN NALIAH",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/ULUWATU/ULUWATU_QUEENNALIAH_N5_HD_673.png",
    },
    idClan: 12,
  },
  {
    idCharacter: 28,
    nameCharacter: "TANAEREVA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/ULUWATU/ULUWATU_TANAEREVAMT_N5_HD_673.png",
    },
    idClan: 12,
  },
  {
    idCharacter: 29,
    nameCharacter: "KUWAKA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/KOMBOKA/KOMBOKA_KUWAKACR_N5_HD_673.png",
    },
    idClan: 13,
  },
  {
    idCharacter: 30,
    nameCharacter: "VOLKAN",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/KOMBOKA/KOMBOKA_VOLKANMT_N5_HD_673.png",
    },
    idClan: 13,
  },
  {
    idCharacter: 31,
    nameCharacter: "KIKI",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/ROOTS/ROOTS_KIKIMT_N5_HD_673.png",
    },
    idClan: 14,
  },
  {
    idCharacter: 32,
    nameCharacter: "ATAOUALPET",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/ROOTS/ROOTS_ATAOUALPET_N3_HD_673.png",
    },
    idClan: 14,
  },
  {
    idCharacter: 33,
    nameCharacter: "KALINDRA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/FROZN/FROZN_KALINDRACR_N5_HD_673.png",
    },
    idClan: 15,
  },
  {
    idCharacter: 34,
    nameCharacter: "YMIRAH",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/FROZN/FROZN_YMIRAHMT_N5_HD_673.png",
    },
    idClan: 15,
  },
  {
    idCharacter: 35,
    nameCharacter: "ONGH",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/JUNGO/JUNGO_ONGHMT_N5_HD_673.png",
    },
    idClan: 16,
  },
  {
    idCharacter: 36,
    nameCharacter: "SOBEK",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/JUNGO/JUNGO_SOBEK_N5_HD_673.png",
    },
    idClan: 16,
  },
  {
    idCharacter: 37,
    nameCharacter: "CORTEZ",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/BERZERK/BERZERK_CORTEZMT_N5_HD_673.png",
    },
    idClan: 17,
  },
  {
    idCharacter: 38,
    nameCharacter: "NADIA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/BERZERK/BERZERK_NADIA_N5_HD_673.png",
    },
    idClan: 17,
  },
  {
    idCharacter: 39,
    nameCharacter: "ENIGMA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/PARADOX/PARADOX_ENIGMACR_N5_HD_673.png",
    },
    idClan: 18,
  },
  {
    idCharacter: 40,
    nameCharacter: "NARKE",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/PARADOX/PARADOX_NARKE_N5_HD_673.png",
    },
    idClan: 18,
  },
  {
    idCharacter: 41,
    nameCharacter: "BLOODH",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/PIRANAS/PIRANAS_BLOODHMT_N5_HD_673.png",
    },
    idClan: 19,
  },
  {
    idCharacter: 42,
    nameCharacter: "YACCANEMBA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/PIRANAS/PIRANAS_YACCANEMBA_N1_HD_673.png",
    },
    idClan: 19,
  },
  {
    idCharacter: 43,
    nameCharacter: "IMPERA SLOANE",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/RAPTORS/RAPTORS_IMPERASLOANECR_N5_HD_673.png",
    },
    idClan: 20,
  },
  {
    idCharacter: 44,
    nameCharacter: "REX SWEIG",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/RAPTORS/RAPTORS_REXSWEIG_N5_HD_673.png",
    },
    idClan: 20,
  },
  {
    idCharacter: 45,
    nameCharacter: "OLGA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/FREAKS/FREAKS_OLGACR_N3_HD_673.png",
    },
    idClan: 21,
  },
  {
    idCharacter: 46,
    nameCharacter: "GRUDJ",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/FREAKS/FREAKS_GRUDJMT_N4_HD_673.png",
    },
    idClan: 21,
  },
  {
    idCharacter: 47,
    nameCharacter: "BECKY",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/COSMOHNUTS/COSMOHNUTS_BECKY_N5_HD_673.png",
    },
    idClan: 22,
  },
  {
    idCharacter: 48,
    nameCharacter: "DOGGONUTS",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/COSMOHNUTS/COSMOHNUTS_DOGGONUTS_N2_HD_673.png",
    },
    idClan: 22,
  },
  {
    idCharacter: 49,
    nameCharacter: "JUDGE LYNCH",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/GHOSTOWN/GHOSTOWN_JUDGELYNCH_N3_HD_673.png",
    },
    idClan: 23,
  },
  {
    idCharacter: 50,
    nameCharacter: "SENTENZA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/GHOSTOWN/GHOSTOWN_SENTENZACR_N5_HD_673.png",
    },
    idClan: 23,
  },
  {
    idCharacter: 51,
    nameCharacter: "DEATH ADDER",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/DOMINION/DOMINION_DEATHADDERMT_N5_HD_673.png",
    },
    idClan: 24,
  },
  {
    idCharacter: 52,
    nameCharacter: "DOOKOR",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/DOMINION/DOMINION_DOOKOR_N4_HD_673.png",
    },
    idClan: 24,
  },
  {
    idCharacter: 53,
    nameCharacter: "KENNY",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/NIGHTMARE/NIGHTMARE_KENNYMT_N4_HD_673.png",
    },
    idClan: 25,
  },
  {
    idCharacter: 54,
    nameCharacter: "KOLOS",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/NIGHTMARE/NIGHTMARE_KOLOSMT_N5_HD_673.png",
    },
    idClan: 25,
  },
  {
    idCharacter: 55,
    nameCharacter: "CAELUS",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/SKEELZ/SKEELZ_CAELUSMT_N5_HD_673.png",
    },
    idClan: 26,
  },
  {
    idCharacter: 56,
    nameCharacter: "DOUNIA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/SKEELZ/SKEELZ_DOUNIAMT_N3_HD_673.png",
    },
    idClan: 26,
  },
  {
    idCharacter: 57,
    nameCharacter: "TYRES",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/OBLIVION/OBLIVION_TYRESMT_N5_HD_673.png",
    },
    idClan: 27,
  },
  {
    idCharacter: 58,
    nameCharacter: "ALTER LD",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/OBLIVION/OBLIVION_ALTERLD_N3_HD_673.png",
    },
    idClan: 27,
  },
  {
    idCharacter: 59,
    nameCharacter: "MAANA CERCEI",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/HIVE/HIVE_MAANACERCEICR_N5_HD_673.png",
    },
    idClan: 28,
  },
  {
    idCharacter: 60,
    nameCharacter: "MAANA 2097",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/HIVE/HIVE_MAANA2097_N5_HD_673.png",
    },
    idClan: 28,
  },
  {
    idCharacter: 61,
    nameCharacter: "GURU",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/SAKROHM/SAKROHM_GURUMT_N5_HD_673.png",
    },
    idClan: 29,
  },
  {
    idCharacter: 62,
    nameCharacter: "URANUS",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/SAKROHM/SAKROHM_URANUSCR_N3_HD_673.png",
    },
    idClan: 29,
  },
  {
    idCharacter: 63,
    nameCharacter: "PERICLES",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/RIOTS/RIOTS_PERICLESMT_N5_HD_673.png",
    },
    idClan: 30,
  },
  {
    idCharacter: 64,
    nameCharacter: "OCTANA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/RIOTS/RIOTS_OCTANA_N5_HD_673.png",
    },
    idClan: 30,
  },
  {
    idCharacter: 65,
    nameCharacter: "TORO",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/GHEIST/GHEIST_TOROMT_N4_HD_673.png",
    },
    idClan: 31,
  },
  {
    idCharacter: 66,
    nameCharacter: "ROLPH",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/GHEIST/GHEIST_ROLPH_N5_HD_673.png",
    },
    idClan: 31,
  },
  {
    idCharacter: 67,
    nameCharacter: "DREGN",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/VORTEX/VORTEX_DREGNMT_N5_HD_673.png",
    },
    idClan: 32,
  },
  {
    idCharacter: 68,
    nameCharacter: "DREGN 2097",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/VORTEX/VORTEX_DREGN2097_N5_HD_673.png",
    },
    idClan: 32,
  },
];

export default CHARACTERS;
