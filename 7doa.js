const modifiers = {
  easy: {
    legs_locked: {
      desc: 'Your ankles must either be behind your head or tied together.',
      add: 0,
      multiply: 1
    },
    chastity: {
      desc: 'Stay locked in chastity while you fuck your ass, as well as for 1 hour before and after.',
      add: 0,
      multiply: 1
    },
    in_the_dark: {
      desc: 'Wear a blindfold and gag while you fuck your ass. You may remove the gag if you need to access your mouth.',
      add: 0,
      multiply: 1
    },
    dress_up: {
      desc: 'Wear a cute outfit while you fuck your ass, try to make it a different one each day.',
      add: 0,
      multiply: 1
    },
    // slutty_moans: {
    //   desc: 'Moan and beg for it while you fuck your ass.',
    //   add: 0,
    //   multiply: 1
    // },
    face_down: {
      desc: 'Face down on the floor/bed while you fuck your ass.',
      add: 0,
      multiply: 1
    },
    more_thrusts: {
      desc: 'Fuck your ass for 200 more Thrusts each day.',
      add: 200,
      multiply: 1
    }
  },
  moderate: {
    metronome: {
      desc: 'Set a metronome to 60bpm while you fuck your ass. You may go faster, but if you go slower than the metronome at any time, enable 1 Easy Modifier and ignore the metronome for the rest of your session.',
      add: 0,
      multiply: 1
    },
    balls_deep: {
      desc: 'Every Thrust must be balls deep to count.',
      add: 0,
      multiply: 1
    },
    // knees_spread: {
    //   desc: 'Keep your knees apart as far as you can while you fuck your ass.',
    //   add: 0,
    //   multiply: 1
    // },
    handcuffed: {
      desc: 'Have your hands cuffed behind your back while you fuck your ass.',
      add: 0,
      multiply: 1
    },
    Clamped: {
      desc: 'Have nipple clamps on for at least 1000 Thrusts each day. Triple your daily Thrusts.',
      add: 0,
      multiply: 3
    },
    more_thrusts: {
      desc: 'Fuck your ass for 500 more Thrusts each day.',
      add: 500,
      multiply: 1
    }
  },
  hard: {
    body_writing: {
      desc: 'Cover your body in degrading writing before you fuck your ass. You should have no body part with nothing written on it.',
      add: 0,
      multiply: 1
    },
    anal_orgasm: {
      desc: 'Double your daily Thrusts count.',
      add: 0,
      multiply: 2
    },
    plugged: {
      desc: 'Plug your ass with a large butt plug for 5 hours after you fuck your ass. If it falls out, add 1 Easy Modifier for every hour not completed.',
      add: 0,
      multiply: 1
    },
    extra_thick: {
      desc: 'Upgrade dildo size from medium to large or from large to huge.',
      add: 0,
      multiply: 1
    },
    passed_around: {
      desc: 'Use 3 different dildos (if you have) for half your daily Thrust count each. This means 50% more daily Thrusts.',
      add: 0,
      multiply: 1.5
    },
    more_thrusts: {
      desc: 'Fuck your ass for 1500 more Thrusts each day.',
      add: 1500,
      multiply: 1
    }
  },
  insane: {
    cam_whore: {
      desc: 'Stream your anal session.',
      add: 0,
      multiply: 1
    },
    anal_crazy: {
      desc: 'Triple your daily thrust count, but can split up into up to 3 separate daily anal sessions.',
      add: 0,
      multiply: 3
    },
    fucking_machine: {
      desc: '50% more daily Thrusts, minimum speed 150bpm',
      add: 0,
      multiply: 1.5
    },
    more_thrusts: {
      desc: 'Fuck your ass for 3000 more Thrusts each day.',
      add: 3000,
      multiply: 1
    }
  }
};

const points = {
  easy: 1,
  moderate: 2,
  hard: 4,
  insane: 8
};

// draw
for (level in modifiers) {
  for (mod in modifiers[level]) {
    document.getElementById(level).innerHTML += `
      <div onclick='clickHandler("${level}", "${mod}")' id='${level}_${mod}' class='contained thinBorder'>
        <h3>${mod.replace(/_/g, ' ').toUpperCase()}</h3>
        <h4>${modifiers[level][mod].desc}</h4>
      </div>
    `;
  }
}

function clickHandler (level, mod) {
  if (modifiers[level][mod].active) {
    // turn from active to inactive
    document.getElementById(`${level}_${mod}`).classList.remove('active');
    modifiers[level][mod].active = 0;
  } else {
    // turn from inactive to active
    document.getElementById(`${level}_${mod}`).classList.add('active');
    modifiers[level][mod].active = 1;
  }
  // calculate thrusts
  let thrusts = 1000;
  let pointsUsed = 0;
  // add thrusts and points used
  for (level in modifiers) {
    for (mod in modifiers[level]) {
      if (modifiers[level][mod].active) {
        thrusts += modifiers[level][mod].add;
        pointsUsed += points[level];
      }
    }
  }
  // multiply thrusts
  for (level in modifiers) {
    for (mod in modifiers[level]) {
      if (modifiers[level][mod].active) {
        thrusts *= modifiers[level][mod].multiply;
      }
    }
  }

  document.getElementById('thrusts').innerHTML = `Daily Thrusts: ${thrusts}, Points used: ${pointsUsed}`;
}
