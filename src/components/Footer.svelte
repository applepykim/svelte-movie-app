<footer>
    <div>
        <a href="https://github.com/HeropCode/Svelte-Movie-app">
        GitHub Repo.
    </a>
    </div>
    <div>
        <a href="https://competent-cori-258206.netlify.app/">
        @{new Date().getFullYear()}
        HEROPY
    </a>
    </div>
</footer>

<style lang="scss">
    footer {
      padding: 70px;
      text-align: center;
      a {
        color: $color--white-10;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
</style>