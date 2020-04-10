import React from 'react';

export const matchMaker = (props) => {
  {
    let match_id = 0;
    const userZodiac = props.split(' ')[0];
    const partnerZodiac = props.split(' ')[1];
    if (userZodiac === 'aries' || partnerZodiac==="aries") {
      switch (props) {
        case 'aries aries':
          match_id = 1;
          break;
        case 'aries taurus':
          match_id = 2;
          break;
        case 'taurus aries':
          match_id = 2;
          break;
        case 'aries gemini':
          match_id = 3;
          break;
          case 'gemini aries ':
          match_id = 3;
          break;
        case 'aries cancer':
          match_id = 4;
          break;
          case 'cancer aries ':
          match_id = 4;
          break;
        case 'aries leo':
          match_id = 5;
          break;
          case 'leo aries':
            match_id = 5;
            break;
        case 'aries virgo':
          match_id = 6;
          break;
          case 'virgo aries':
          match_id = 6;
          break;
        case 'aries libra':
          match_id = 7;
          break;
          case 'libra aries':
          match_id = 7;
          break;
        case 'aries scorpio':
          match_id = 8;
          break;
          case 'scorpio aries':
          match_id = 8;
          break;
        case 'aries sagittarius':
          match_id = 9;
          break;
          case 'sagittarius aries':
          match_id = 9;
          break;
        case 'aries capricorn':
          match_id = 10;
          break;
          case 'capricorn aries':
          match_id = 10;
          break;
        case 'aries aquarius':
          match_id = 11;
          break;
          case 'aquarius aries':
            match_id = 11;
            break;
        case 'aries pisces':
          match_id = 12;
          case 'pisces aries':
          match_id = 12;
      }
    } else if (userZodiac === 'taurus' || partnerZodiac==="taurus") {
      switch (props) {
        case 'taurus taurus':
          match_id = 13;
          break;
        case 'taurus gemini':
          match_id = 14;
          break;
          case 'gemini taurus':
          match_id = 14;
          break;
        case 'taurus cancer':
          match_id = 15;
          break;
          case 'cancer taurus':
          match_id = 15;
          break;
        case 'taurus leo':
          match_id = 16;
          break;
          case 'leo taurus':
          match_id = 16;
          break;
        case 'taurus virgo':
          match_id = 17;
          break;
          case 'virgo taurus':
            match_id = 17;
            break;
        case 'taurus libra':
          match_id = 18;
          break;
          case 'libra taurus':
          match_id = 18;
          break;
        case 'taurus scorpio':
          match_id = 19;
          break;
          case 'scorpio taurus':
          match_id = 19;
          break;
        case 'taurus sagittarius':
          match_id = 20;
          break;
          case 'sagittarius taurus':
          match_id = 20;
          break;
        case 'taurus capricorn':
          match_id = 21;
          break;
          case 'capricorn taurus':
          match_id = 21;
          break;
        case 'taurus aquarius':
          match_id = 22;
          break;
          case 'aquarius taurus':
          match_id = 22;
          break;
        case 'taurus pisces':
          match_id = 23;
          case 'pisces taurus':
            match_id = 23;
      }
    } else if (userZodiac === 'gemini'|| partnerZodiac==="gemini") {
      switch (props) {
        case 'gemini gemini':
          match_id = 24;
          break;
        case 'gemini cancer':
          match_id = 25;
          break;
          case 'cancer gemini':
          match_id = 25;
          break;
        case 'gemini leo':
          match_id = 26;
          break;
          case 'leo gemini':
          match_id = 26;
          break;
        case 'gemini virgo':
          match_id = 27;
          break;
          case 'virgo gemini':
          match_id = 27;
          break;
        case 'gemini libra':
          match_id = 28;
          break;
          case 'libra gemini':
          match_id = 28;
          break;
        case 'gemini scorpio':
          match_id = 29;
          break;
          case 'scorpio gemini':
          match_id = 29;
          break;
        case 'gemini sagittarius':
          match_id = 30;
          break;
          case 'sagittarius gemini':
          match_id = 30;
          break;
        case 'gemini capricorn':
          match_id = 31;
          break;
          case 'capricorn gemini':
          match_id = 31;
          break;
        case 'gemini aquarius':
          match_id = 32;
          break;
          case 'aquarius gemini':
          match_id = 32;
          break;
        case 'gemini pisces':
          match_id = 33;
          case 'pisces gemini':
            match_id = 33;
      }
    } else if (userZodiac === 'cancer'|| partnerZodiac==="cancer") {
      switch (props) {
        case 'cancer cancer':
          match_id = 34;
          break;
        case 'cancer leo':
          match_id = 35;
          break;
          case 'leo cancer':
          match_id = 35;
          break;
        case 'cancer virgo':
          match_id = 36;
          break;
          case 'virgo cancer':
          match_id = 36;
          break;
        case 'cancer libra':
          match_id = 37;
          break;
          case 'libra cancer':
          match_id = 37;
          break;
        case 'cancer scorpio':
          match_id = 38;
          break;
          case 'scorpio cancer':
          match_id = 38;
          break;
        case 'cancer sagittarius':
          match_id = 39;
          break;
          case 'sagittarius cancer':
          match_id = 39;
          break;
        case 'cancer capricorn':
          match_id = 40;
          break;
          case 'capricorn cancer':
          match_id = 40;
          break;
        case 'cancer aquarius':
          match_id = 41;
          break;
          case 'aquarius cancer':
          match_id = 41;
          break;
        case 'cancer pisces':
          match_id = 42;
          break;
        case 'pisces cancer':
          match_id = 42;
      }
    } else if (userZodiac === 'leo'|| partnerZodiac==="leo") {
      switch (props) {
        case 'leo leo':
          match_id = 43;
          break;
        case 'leo virgo':
          match_id = 44;
          break;
          case 'virgo leo':
          match_id = 44;
          break;
        case 'leo libra':
          match_id = 45;
          break;
          case 'libra leo':
          match_id = 45;
          break;
        case 'leo scorpio':
          match_id = 46;
          break;
          case 'scorpio leo':
          match_id = 46;
          break;
        case 'leo sagittarius':
          match_id = 47;
          break;
          case 'sagittarius leo':
          match_id = 47;
          break;
        case 'leo capricorn':
          match_id = 48;
          break;
          case 'capricorn leo':
          match_id = 48;
          break;
        case 'leo aquarius':
          match_id = 49;
          break;
          case 'aquarius leo':
          match_id = 49;
          break;
        case 'leo pisces':
          match_id = 50;
          case 'pisces leo':
          match_id = 50;
      }
    } else if (userZodiac === 'virgo'|| partnerZodiac==="virgo") {
      switch (props) {
        case 'virgo virgo':
          match_id = 51;
          break;
        case 'virgo libra':
          match_id = 52;
          break;
          case 'libra virgo':
          match_id = 52;
          break;
        case 'virgo scorpio':
          match_id = 53;
          break;
          case 'scorpio virgo':
          match_id = 53;
          break;
        case 'virgo sagittarius':
          match_id = 54;
          break;
          case 'sagittarius virgo':
          match_id = 54;
          break;
        case 'virgo capricorn':
          match_id = 55;
          break;
          case 'capricorn virgo':
          match_id = 55;
          break;
        case 'virgo aquarius':
          match_id = 56;
          break;
          case 'aquarius virgo':
          match_id = 56;
          break;
        case 'virgo pisces':
          match_id = 57;
          case 'pisces virgo':
          match_id = 57;
      }
    } else if (userZodiac === 'libra'|| partnerZodiac==="libra") {
      switch (props) {
        case 'libra libra':
          match_id = 58;
          break;
        case 'libra scorpio':
          match_id = 59;
          break;
          case 'scorpio libra':
          match_id = 59;
          break;
        case 'libra sagittarius':
          match_id = 60;
          break;
          case 'sagittarius libra':
          match_id = 60;
          break;
        case 'libra capricorn':
          match_id = 61;
          break;
          case 'capricorn libra':
          match_id = 61;
          break;
        case 'libra aquarius':
          match_id = 62;
          break;
          case 'aquarius libra':
          match_id = 62;
          break;
        case 'libra pisces':
          match_id = 63;
          case 'pisces libra':
            match_id = 63;
      }
    } else if (userZodiac === 'scorpio'|| partnerZodiac==="scorpio") {
      switch (props) {
        case 'scorpio scorpio':
          match_id = 64;
          break;
        case 'scorpio sagittarius':
          match_id = 65;
          break;
          case 'sagittarius scorpio':
          match_id = 65;
          break;
        case 'scorpio capricorn':
          match_id = 66;
          break;
          case 'capricorn scorpio':
          match_id = 66;
          break;
        case 'scorpio aquarius':
          match_id = 67;
          break;
          case 'aquarius scorpio':
          match_id = 67;
          break;
        case 'scorpio pisces':
          match_id = 68;
          case 'pisces scorpio':
          match_id = 68;
      }
    } else if (userZodiac === 'sagittarius'|| partnerZodiac==="sagittarius") {
      switch (props) {
        case 'sagittarius sagittarius':
          match_id = 69;
          break;
        case 'sagittarius capricorn':
          match_id = 70;
          break;
          case 'capricorn sagittarius':
          match_id = 70;
          break;
        case 'sagittarius aquarius':
          match_id = 71;
          break;
          case 'aquarius sagittarius':
          match_id = 71;
          break;
        case 'sagittarius pisces':
          match_id = 72;
          case 'pisces sagittarius':
          match_id = 72;
      }
    } else if (userZodiac === 'capricorn'|| partnerZodiac==="capricorn") {
      switch (props) {
        case 'capricorn capricorn':
          match_id = 73;
          break;
        case 'capricorn aquarius':
          match_id = 74;
          break;
          case 'aquarius capricorn':
          match_id = 74;
          break;
        case 'capricorn pisces':
          match_id = 75;
          case 'pisces capricorn':
          match_id = 75;
      }
    } else if (userZodiac === 'aquarius'|| partnerZodiac==="aquarius") {
      switch (props) {
        case 'aquarius aquarius':
          match_id = 76;
          break;
        case 'aquarius pisces':
          match_id = 77;
          case 'pisces aquarius':
            match_id = 77;
      }
    } else if (userZodiac === 'pisces'|| partnerZodiac==="pisces") {
      switch (props) {
        case 'pisces pisces':
          match_id = 78;
      }
    }

    return match_id
  }
};
