export function showNotification(
  setter: React.Dispatch<React.SetStateAction<boolean>>
) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(
  correct: string[],
  wrong: string[],
  word: string
): string {
  let status: string = "win";

  //check for win
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  // check for loss
  if (wrong.length === 6) status = "lose";

  return status;
}
