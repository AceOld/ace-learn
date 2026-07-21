/* ===========================================================
 * learn-data-govern · Quiz 交互组件
 * 使用:
 *   <link rel="stylesheet" href="../assets/course.css">
 *   <script src="../assets/quiz.js" defer></script>
 *
 *   <div class="quiz" data-correct="b">
 *     <div class="q">问题文本?</div>
 *     <ul>
 *       <li data-k="a">选项 A(同长度、同字符数)</li>
 *       <li data-k="b">选项 B</li>
 *       ...
 *     </ul>
 *     <div class="reveal">解析</div>
 *   </div>
 *
 * 设计原则(teach skill):
 *   - 选项长度尽量相同,避免长度泄露答案
 *   - 点击即时反馈(tight feedback loop)
 *   - 选错也能看解析(storage strength 靠反思,不靠惩罚)
 * =========================================================== */

(function () {
  function initQuiz(root) {
    root.querySelectorAll(".quiz").forEach(function (quiz) {
      var correct = quiz.getAttribute("data-correct");
      var reveal = quiz.querySelector(".reveal");
      var answered = false;

      quiz.querySelectorAll("li").forEach(function (li) {
        li.addEventListener("click", function () {
          if (answered) return;
          var key = li.getAttribute("data-k");
          // 锁定
          answered = true;
          // 标记对错
          if (key === correct) {
            li.classList.add("correct");
          } else {
            li.classList.add("wrong");
            var right = quiz.querySelector('li[data-k="' + correct + '"]');
            if (right) right.classList.add("correct");
          }
          if (reveal) reveal.classList.add("shown");
        });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initQuiz(document);
    });
  } else {
    initQuiz(document);
  }
})();
