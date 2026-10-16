// 読み込み確認
console.log("証券運用システム: 正常読み込み完了");

// タブボタンとカード要素をすべて取得
const tabButtons = document.querySelectorAll('.tab-btn');
const cards = document.querySelectorAll('.card');

// 各タブボタンにクリックイベントを設定
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 1. すべてのボタンから is-active クラスを外す
    tabButtons.forEach(btn => btn.classList.remove('is-active'));
    
    // 2. クリックされたボタンに is-active クラスをつける
    button.classList.add('is-active');

    // 3. 選択されたカテゴリ名を取得
    const selectedCategory = button.getAttribute('data-category');
    console.log("選択されたカテゴリ:", selectedCategory);

    // 4. カードの表示/非表示を判定
    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');

      if (selectedCategory === 'all' || selectedCategory === cardCategory) {
        card.classList.remove('is-hidden'); // 表示
      } else {
        card.classList.add('is-hidden');    // 非表示
      }
    });
  });
});

// 新NISAキャンペーン終了日（2026年11月30日）
const targetDate = new Date('2026-11-30T23:59:59');
const today = new Date();

// 差分ミリ秒から日数へ変換
const diffTime = targetDate - today;
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

const countdownEl = document.getElementById('nisa-countdown');
if (countdownEl) {
  if (diffDays > 0) {
    countdownEl.textContent = `キャンペーン終了まで あと ${diffDays} 日`;
  } else {
    countdownEl.textContent = `キャンペーンは終了しました`;
  }
}