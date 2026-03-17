const fs = require('fs');
const path = require('path');
const ghpages = require('gh-pages');

// Step 1: Create CNAME file in 'dist'
const cnamePath = path.join(__dirname, 'dist', 'CNAME');
fs.writeFileSync(cnamePath, 'truevisual.io'); // replace with your actual custom domain

// Step 2: Publish to gh-pages
ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'git@github.com-tb:TechnoboostSoftware/truevisual-website-tsx.git',
  dotfiles: true
}, function (err) {
  if (err) {
    console.error('🚨 Deployment failed:', err);
  } else {
    console.log('✅ Deployment successful!');
  }
});
