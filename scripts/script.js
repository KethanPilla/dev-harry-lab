$(function () {
  $("input[name='optradio']").on("change", function () {
    let radioChoice = $("input[name='optradio']:checked").val();

    if (radioChoice === "North-part") {
      $("#letterWordsSelect")
        .empty()
        .append(`<option value="Connecticut">Connecticut</option>`)
        .append(`<option value="Illinois">Illinois</option>`)
          .append(`<option value="Indiana">Indiana</option>`)
          .append(`<option value="Iowa">Iowa</option>`)
          .append(`<option value="Kansas">Kansas</option>`)
          .append(`<option value="Maine">Maine</option>`)
          .append(`<option value="Massachusetts">Massachusetts</option>`)
          .append(`<option value="Michigan">Michigan</option>`)
          .append(`<option value="Minnesota">Minnesota</option>`)
          .append(`<option value="Nebraska">Nebraska</option>`)
          .append(`<option value="New Hampshire">New Hampshire</option>`)
          .append(`<option value="New Jersey">New Jersey</option>`)
          .append(`<option value="other">other</option>`);
        } else if (radioChoice === "South-part") {
          $("#letterWordsSelect")
            .empty()
            .append(`<option value="Alabama">Alabama</option>`)
          .append(`<option value="Arkansas">Arkansas</option>`)
          .append(`<option value="Delaware">Delaware</option>`)
          .append(`<option value="Florida">Florida</option>`)
          .append(`<option value="Georgia">Georgia</option>`)
          .append(`<option value="Kentucky">Kentucky</option>`)
          .append(`<option value="Louisiana">Louisiana</option>`)
          .append(`<option value="other">other</option>`);
        } else {
          $("#letterWordsSelect")
            .empty()
            .append(`<option value="">Select an option</option>`);
        }
      });
    });

    $("#formSubmit").on("click", (e) => {
      e.preventDefault();
    
      // Collect data
      let firstName = $("#fname").val();
      let lastName = $("#lname").val();
      let dob = $("#dob").val();
      let gender = $("input[name='Sex']:checked").val();
      let shifts = [];
      $("input[name='shift']:checked").each(function () {
        shifts.push($(this).val());
      });
      let location = $("input[name='optradio']:checked").val();
      let state = $("#letterWordsSelect").val();
    
      // Display data
      $("#output").html(`
        <h3>Submitted Data</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Shifts:</strong> ${shifts.join(', ')}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>State:</strong> ${state}</p>
      `);
    });
    