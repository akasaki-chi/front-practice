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