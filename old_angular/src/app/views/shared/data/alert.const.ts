export const instructions = {
  title: 'Hey Hunter!',
  text: 'To eliminate all the spiders, find the leader and answer his question- if you answer correctly the spiders will go away',
  confirmButtonText: 'Start Playing',
  width: 400,
  padding: '2em',
  color: 'rgb(28 90 113)',
  backdrop: 'rgb(83 67 67 / 30%)',
  customClass: {
    confirmButton: 'swl-notify',
  },
  showConfirmButton: true,
  allowOutsideClick: false,
};

export const wrong_ans = {
  title: 'Oops!',
  text: 'Some spiders tricked you, and they won- better luck next time',
  confirmButtonText: 'Try once again',
  width: 400,
  padding: '2em',
  color: '#bf251a',
  backdrop: 'rgb(123 0 0 / 40%)',
  customClass: {
    confirmButton: 'swl-error',
  },
  showConfirmButton: true,
  allowOutsideClick: false,
};

export const game_winner = {
  title: 'Good Job',
  text: 'You bit all the spiders and saved the day',
  confirmButtonText: 'Play Again',
  showConfirmButton: true,
  width: 400,
  padding: '2em',
  color: '#15a038',
  backdrop: 'rgb(14 0 0 / 77%)',
  customClass: {
    confirmButton: 'swl-success',
  },
  allowOutsideClick: false,
};
