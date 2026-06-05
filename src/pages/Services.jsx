export default function Services({ t }) {
  return (
    <table border="1" cellPadding="8" style={{ background: 'white', color: 'black', width: '100%' }}>
      <thead>
        <tr><th>{t.services}</th><th>Стоимость</th></tr>
      </thead>
      <tbody>
        <tr><td>Консультация</td><td>1 500 ₽</td></tr>
        <tr><td>Разработка бренда</td><td>10 000 ₽</td></tr>
      </tbody>
    </table>
  );
}