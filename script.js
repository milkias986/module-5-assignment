const currentHour = new Date().getHours();
const timeBlocks = document.querySelectorAll(".time-block");

timeBlocks.forEach(block => {
  const hour = parseInt(block.firstElement