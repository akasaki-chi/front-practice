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
const form = document.getElementById('signup-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');

    // エラーメッセージの初期化
    nameError.textContent = '';
    emailError.textContent = '';

    let isValid = true;

    // お名前チェック
    if (username === '') {
      nameError.textContent = 'お名前を入力してください';
      isValid = false;
    }

    // メールアドレスチェック
    if (email === '') {
      emailError.textContent = 'メールアドレスを入力してください';
      isValid = false;
    } else if (!email.includes('@')) {
      emailError.textContent = '正しいメールアドレスの形式で入力してください';
      isValid = false;
    }

    // 入力成功時
    if (isValid) {
      alert('送信が完了しました！');
      form.reset();
    }
  });
}