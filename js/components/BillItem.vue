<template>
  <div class="panel panel-default">
    <!-- Default panel contents -->
    <div class="panel-heading"><h4>帳單明細</h4></div>
    <div class="panel-body">
      <dl class="dl-horizontal">
        <dt>帳單編號</dt>
        <dd>{{ bill.id }}</dd>

        <dt>使用者名稱</dt>
        <dd>{{ bill.user_name }}</dd>

        <dt>租屋地址</dt>
        <dd>{{ bill.address }}</dd>

        <dt>帳單費用總計</dt>
        <dd>{{ bill.total }}</dd>

        <dt>帳單計費開始時間</dt>
        <dd>{{ bill.date_start }}</dd>

        <dt>帳單計費結束時間</dt>
        <dd>{{ bill.date_end }}</dd>

        <dt>繳費截止時間</dt>
        <dd>{{ bill.expire }}</dd>

        <dt>備註</dt>
        <dd><blockquote>{{ bill.note }}</blockquote></dd>
      </dl>
    </div>
    <div class="panel-footer">
      <button :data-link="bill.html" onclick="javscript:window.location='bill-detail.html';" class="btn btn-success">帳單明細</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props: ['bill', 'bill_link'],
}
</script>
