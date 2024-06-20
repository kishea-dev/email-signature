import { writable } from 'svelte/store';

// Example templates with placeholders for dynamic content
export const templates = writable([
  {
    name: 'Classic Elegant',
    html: `
      <div class="signature-template">
        <table cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; font-size: 14px; color: #333; line-height: 1.6em;">
          <tr>
            <td style="padding-right: 10px;">
              <img src="{photo}" style="max-width: 100px; height: auto; border-radius: 50%;" alt="Profile Picture">
            </td>
            <td>
              <strong>{name}</strong><br>
              {position}<br>
              {company}<br>
              <a href="mailto:{email}" style="color: #333; text-decoration: none;">{email}</a><br>
              {phone}<br>
              <a href="{website}" style="color: #333; text-decoration: none;">{website}</a>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="padding-top: 10px;">
              <a href="https://twitter.com/{twitter}" style="text-decoration: none; color: #1DA1F2;">
                <i class="fab fa-twitter"></i>
              </a>&nbsp;&nbsp;
              <a href="https://github.com/{github}" style="text-decoration: none; color: #333;">
                <i class="fab fa-github"></i>
              </a>&nbsp;&nbsp;
              <a href="https://facebook.com/{facebook}" style="text-decoration: none; color: #3b5998;">
                <i class="fab fa-facebook"></i>
              </a>&nbsp;&nbsp;
              <a href="https://weixin.qq.com/{wechat}" style="text-decoration: none; color: #07C160;">
                <i class="fab fa-weixin"></i>
              </a>
            </td>
          </tr>
        </table>
      </div>
    `
  },
  {
    name: 'Modern Minimalist',
    html: `
      <div class="signature-template" style="font-family: Arial, sans-serif; font-size: 14px; color: #333; line-height: 1.6em;">
        <strong style="font-size: 16px;">{name}</strong><br>
        <span style="font-size: 14px; color: #666;">{position}</span><br>
        {company}<br>
        <a href="mailto:{email}" style="color: #333; text-decoration: none;">{email}</a><br>
        {phone}<br>
        <a href="{website}" style="color: #333; text-decoration: none;">{website}</a><br>
        <div style="margin-top: 10px;">
          <a href="https://twitter.com/{twitter}" style="text-decoration: none; color: #1DA1F2;">
            <i class="fab fa-twitter"></i>
          </a>&nbsp;&nbsp;
          <a href="https://github.com/{github}" style="text-decoration: none; color: #333;">
            <i class="fab fa-github"></i>
          </a>&nbsp;&nbsp;
          <a href="https://facebook.com/{facebook}" style="text-decoration: none; color: #3b5998;">
            <i class="fab fa-facebook"></i>
          </a>&nbsp;&nbsp;
          <a href="https://weixin.qq.com/{wechat}" style="text-decoration: none; color: #07C160;">
            <i class="fab fa-weixin"></i>
          </a>
        </div>
      </div>
    `
  },
  {
    name: 'Professional Corporate',
    html: `
      <div class="signature-template">
        <table cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; font-size: 14px; color: #333; line-height: 1.6em;">
          <tr>
            <td style="vertical-align: top; padding-right: 10px;">
              <img src="{photo}" style="max-width: 80px; height: auto; border-radius: 50%;" alt="Profile Picture">
            </td>
            <td style="vertical-align: top;">
              <strong style="font-size: 16px;">{name}</strong><br>
              <span style="font-size: 14px; color: #666;">{position}</span><br>
              {company}<br>
              <a href="mailto:{email}" style="color: #333; text-decoration: none;">{email}</a><br>
              {phone}<br>
              <a href="{website}" style="color: #333; text-decoration: none;">{website}</a>
            </td>
            <td style="vertical-align: top; padding-left: 20px; border-left: 1px solid #ccc; padding-top: 5px;">
              <a href="https://twitter.com/{twitter}" style="text-decoration: none; color: #1DA1F2;">
                <i class="fab fa-twitter"></i>
              </a><br>
              <a href="https://github.com/{github}" style="text-decoration: none; color: #333;">
                <i class="fab fa-github"></i>
              </a><br>
              <a href="https://facebook.com/{facebook}" style="text-decoration: none; color: #3b5998;">
                <i class="fab fa-facebook"></i>
              </a><br>
              <a href="https://weixin.qq.com/{wechat}" style="text-decoration: none; color: #07C160;">
                <i class="fab fa-weixin"></i>
              </a>
            </td>
          </tr>
        </table>
      </div>
    `
  },
  {
    name: 'Creative Bold',
    html: `
      <div class="signature-template" style="font-family: Arial, sans-serif; font-size: 14px; color: #333; line-height: 1.6em; background-color: #f4f4f4; padding: 10px; border-radius: 10px;">
        <strong style="font-size: 18px; color: #444;">{name}</strong> - <span style="font-size: 14px; color: #999;">{position}</span><br>
        <span style="font-size: 14px; color: #444;">{company}</span><br>
        <a href="mailto:{email}" style="color: #333; text-decoration: none;">{email}</a> | <a href="{website}" style="color: #333; text-decoration: none;">{website}</a><br>
        <span style="font-size: 14px; color: #444;">{phone}</span><br>
        <div style="margin-top: 10px;">
          <a href="https://twitter.com/{twitter}" style="text-decoration: none; color: #1DA1F2;">
            <i class="fab fa-twitter"></i>
          </a>&nbsp;&nbsp;
          <a href="https://github.com/{github}" style="text-decoration: none; color: #333;">
            <i class="fab fa-github"></i>
          </a>&nbsp;&nbsp;
          <a href="https://facebook.com/{facebook}" style="text-decoration: none; color: #3b5998;">
            <i class="fab fa-facebook"></i>
          </a>&nbsp;&nbsp;
          <a href="https://weixin.qq.com/{wechat}" style="text-decoration: none; color: #07C160;">
            <i class="fab fa-weixin"></i>
          </a>
        </div>
      </div>
    `
  },
  {
    name: 'Elegant Simplicity',
    html: `
      <div class="signature-template" style="font-family: Arial, sans-serif; font-size: 14px; color: #333; line-height: 1.6em;">
        <strong style="font-size: 16px;">{name}</strong><br>
        <span style="font-size: 14px; color: #666;">{position}</span><br>
        <span style="font-size: 14px; color: #333;">{company}</span><br>
        <a href="mailto:{email}" style="color: #333; text-decoration: none;">{email}</a><br>
        {phone}<br>
        <a href="{website}" style="color: #333; text-decoration: none;">{website}</a><br>
        <div style="margin-top: 10px;">
          <a href="https://twitter.com/{twitter}" style="text-decoration: none; color: #1DA1F2;">
            <i class="fab fa-twitter"></i>
          </a>&nbsp;&nbsp;
          <a href="https://github.com/{github}" style="text-decoration: none; color: #333;">
            <i class="fab fa-github"></i>
          </a>&nbsp;&nbsp;
          <a href="https://facebook.com/{facebook}" style="text-decoration: none; color: #3b5998;">
            <i class="fab fa-facebook"></i>
          </a>&nbsp;&nbsp;
          <a href="https://weixin.qq.com/{wechat}" style="text-decoration: none; color: #07C160;">
            <i class="fab fa-weixin"></i>
          </a>
        </div>
      </div>
    `
  }
]);

// Function to load initial user info from localStorage
function loadUserInfo() {
  const storedUserInfo = localStorage.getItem('user_info');
  return storedUserInfo ? JSON.parse(storedUserInfo) : {
    name: 'John Doe',
    phone: '+256 712-345-678',
    email: 'johndoe@outlook.com',
    company: 'Kishea Technologies LTD',
    website: 'kishea.org',
    twitter: 'KisheaDev',
    github: 'kishea-dev',
    facebook: 'kishea',
    wechat: 'kishea',
    photo: '',
    position: 'Software Developer',
  };
}


// Initialize userInfo store with data from localStorage
export const userInfo = writable(loadUserInfo());

// Subscribe to userInfo changes and store to localStorage
userInfo.subscribe(value => {
  localStorage.setItem('user_info', JSON.stringify(value));
});