"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
export const handleAuth = async (formData: FormData) => {
  "use server";
  const login_id = formData.get("login_id");
  const password = formData.get("password");

  const response = await fetch(
    "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login_id,
        password,
      }),
    }
  );
  try {
    const data = await response.json();
    if (data) {
      const cookie = cookies();
      console.log(data.access_token);
      cookie.set("auth", data.access_token);
    }
  } catch (err) {
    console.log(err);
  }
};

export async function getData() {
  const cookie = cookies();
  const token = cookie.get("auth")?.value;
  const url =
    "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list";

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    console.error("Failed to create assignment:", response);
  }

  try {
    if (response.status === 200) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function createData(formData: FormData) {
  const cookie = cookies();
  const token = cookie.get("auth")?.value;
  console.log(token);
  const first_name = formData.get("first_name");
  const last_name = formData.get("last_name");
  const street = formData.get("street");
  const address = formData.get("address");
  const city = formData.get("city");
  const state = formData.get("state");
  const email = formData.get("email");
  const phone = formData.get("phone");

  const url =
    "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      street: street,
      address: address,
      city: city,
      state: state,
      email: email,
      phone: phone,
    }),
  });

  if (!response.ok) {
    console.error("Failed to create assignment:", response);
  }

  try {
    if (response.status === 201) {
      revalidatePath("/");
    }
  } catch (err) {
    console.log(err);
  }
}

export async function deleteData(id: string) {
  const cookie = cookies();
  const token = cookie.get("auth")?.value;
  const url = `https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=delete&uuid=${id}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    console.error("Failed to create assignment:", response);
  }

  try {
    if (response.status === 200) {
      revalidatePath("/");
      console.log("Successfully deleted");
    }
  } catch (err) {
    console.log(err);
  }
}

export async function updateData(formData: FormData, id: string) {
  const cookie = cookies();
  const token = cookie.get("auth")?.value;

  const first_name = formData.get("first_name");
  const last_name = formData.get("last_name");
  const street = formData.get("street");
  const address = formData.get("address");
  const city = formData.get("city");
  const state = formData.get("state");
  const email = formData.get("email");
  const phone = formData.get("phone");

  const url = `https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=update&uuid=${id}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      street: street,
      address: address,
      city: city,
      state: state,
      email: email,
      phone: phone,
    }),
  });

  if (!response.ok) {
    console.error("Failed to create assignment:", response);
  }

  try {
    if (response.status === 200) {
      revalidatePath("/");
      console.log("Successfully Edited");
    }
  } catch (err) {
    console.log(err);
  }
}
