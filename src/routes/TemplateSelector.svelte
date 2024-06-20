<script>
  import { onMount } from "svelte";
  import SignatureTemplate from "../components/SignatureTemplate.svelte";
  import { templates, userInfo } from "../stores";
  import { get } from "svelte/store";

  let selectedTemplate = null;
  let allTemplates = [];
  let currentUserInfo = get(userInfo);

  const loadTemplate = (templateIndex) => {
    selectedTemplate = allTemplates[templateIndex];
  };

  onMount(() => {
    allTemplates = get(templates);
    selectedTemplate = allTemplates[0];
    userInfo.subscribe((value) => {
      currentUserInfo = value;
    });
  });

  // function handleInput(event, key) {
  //   userInfo.update((info) => {
  //     info[key] = event.target.value;
  //     return info;
  //   });
  // }

  function handleInput(event, key) {
    // Restrict input to alphanumeric characters and common symbols
    const regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if (!regex.test(event.target.value)) {
      event.target.value = event.target.value.replace(
        /[^a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g,
        "",
      );
    }
    userInfo.update((info) => {
      info[key] = event.target.value;
      return info;
    });
  }

  function handlePhotoUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      userInfo.update((info) => {
        info.photo = reader.result;
        return info;
      });
    };
    reader.readAsDataURL(file);
  }
</script>

<div class="template-selector">
  <aside class="sidebar">
    <h2>Select a Template</h2>
    <ul>
      {#each allTemplates as template, index}
        <li>
          <button on:click={() => loadTemplate(index)}>{template.name}</button>
        </li>
      {/each}
    </ul>

    <div class="user-inputs">
      <h3>User Details</h3>
      <label>
        Name:
        <input
          type="text"
          value={currentUserInfo.name}
          on:input={(e) => handleInput(e, "name")}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          value={currentUserInfo.phone}
          on:input={(e) => handleInput(e, "phone")}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={currentUserInfo.email}
          on:input={(e) => handleInput(e, "email")}
        />
      </label>
      <label>
        Company:
        <input
          type="text"
          value={currentUserInfo.company}
          on:input={(e) => handleInput(e, "company")}
        />
      </label>

      <label>
        Website:
        <input
          type="text"
          value={currentUserInfo.website}
          on:input={(e) => handleInput(e, "website")}
        />
      </label>

      <label>
        Twitter:
        <input
          type="text"
          value={currentUserInfo.twitter}
          on:input={(e) => handleInput(e, "twitter")}
        />
      </label>
      <label>
        GitHub:
        <input
          type="text"
          value={currentUserInfo.github}
          on:input={(e) => handleInput(e, "github")}
        />
      </label>
      <label>
        Facebook:
        <input
          type="text"
          value={currentUserInfo.facebook}
          on:input={(e) => handleInput(e, "facebook")}
        />
      </label>
      <label>
        WeChat:
        <input
          type="text"
          value={currentUserInfo.wechat}
          on:input={(e) => handleInput(e, "wechat")}
        />
      </label>
      <label>
        Photo:
        <input type="file" accept="image/*" on:change={handlePhotoUpload} />
      </label>
    </div>
  </aside>

  <section class="content">
    {#if selectedTemplate}
      <SignatureTemplate
        template={selectedTemplate}
        userInfo={currentUserInfo}
      />
    {/if}
  </section>
</div>

<style>
  .template-selector {
    display: flex;
    width: 100%;
  }
  .sidebar {
    width: 300px;
    background-color: #f8f8f8;
    padding: 20px;
    border-right: 1px solid #ccc;
  }
  .content {
    flex: 1;
    padding: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    padding: 10px 0;
  }
  button {
    width: 100%;
    padding: 10px;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    font-size: 16px;
  }
  button:hover {
    background-color: #e0e0e0;
  }
  .user-inputs label {
    display: block;
    margin-top: 10px;
  }
  .user-inputs input {
    width: 100%;
    padding: 5px;
  }
</style>
