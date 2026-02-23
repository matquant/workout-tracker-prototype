const DEPLOYMENT_URL = process.argv[2] || 'https://workout-tracker-prototype.vercel.app';

console.log(`Testing deployment at: ${DEPLOYMENT_URL}`);
console.log("Press Ctrl+C to stop.");

async function checkDeployment() {
  try {
    const res = await fetch(DEPLOYMENT_URL);
    
    if (res.ok) {
      console.log(`   ✅ Site is UP! (Status: ${res.status})`);
      console.log(`   URL: ${res.url}`); // Logs redirected URL
      
      // Check login page specifically
      const loginRes = await fetch(`${DEPLOYMENT_URL}/login`);
      if (loginRes.ok) {
          console.log("   - Login page accessible.");
          return true;
      } else {
          console.log(`   - Login page returned ${loginRes.status}`);
      }
    } else {
      if (res.status === 404) {
        console.log("   ⚠️  404 Not Found (Deployment likely building or failed).");
      } else {
        console.log(`   ⚠️  Status: ${res.status}`);
      }
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
  }
  return false;
}

async function runTests() {
  let attempts = 0;
  const maxAttempts = 60; // 5 minutes

  while (attempts < maxAttempts) {
    attempts++;
    process.stdout.write(`Attempt ${attempts}/${maxAttempts}... `);
    
    const success = await checkDeployment();
    if (success) {
      console.log("\nDeployment Verified Successfully!");
      process.exit(0);
    }

    // Wait 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
  
  console.log("\nTimeout reached. Please check Vercel logs.");
  process.exit(1);
}

runTests();
