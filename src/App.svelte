<script>
	import { Router, Route } from 'svelte-routing';
	import TemplateSelector from './routes/TemplateSelector.svelte';
  </script>
  
  <main class="app-container">
	<Router>
	  <Route path="/" component={TemplateSelector} />
	</Router>
  </main>
  
  <style>
	.app-container {
	  display: flex;
	  height: 100vh;
	}
  </style>
  