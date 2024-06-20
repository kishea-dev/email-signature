<script>
    export let template;
    export let userInfo;
</script>

<div class="signature-template">
    {@html template.html
        // name
        .replace("{name}", userInfo.name)
        // email
        .replaceAll("{email}", userInfo.email)
        // phone
        .replaceAll("{phone}", userInfo.phone)
        // website
        .replaceAll("{website}", userInfo.website)
        // photo
        .replaceAll("{photo}", userInfo.photo)
        // wechat
        .replaceAll("{wechat}", userInfo.wechat)
        // facebook
        .replaceAll("{facebook}", userInfo.facebook)
        // twitter
        .replaceAll("{twitter}", userInfo.twitter)
        // github
        .replaceAll("{github}", userInfo.github)
        // company
        .replaceAll("{company}", userInfo.company)}
</div>

<style>
    .signature-template {
        border: 1px solid #ccc;
        padding: 20px;
        margin: 20px 0;
    }
</style>
