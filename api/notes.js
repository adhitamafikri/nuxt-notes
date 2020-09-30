const mockresponse = {
  data: [
    {
      id: 1,
      title: "Balenciaga Challenge",
      content:
        "You know, Balenciaga challenge is a challenge that needs ppl to buy balenciaga, lmfao",
    },
    {
      id: 2,
      title: "Quavo Huncho",
      content: "Coolest bruv from migos",
    },
    {
      id: 3,
      title: "6lack in the Back",
      content: "This rapper never misses. Waiting for his collab with JID tho",
    },
  ],

  meta: {
    http_code: 200,
    message: "success",
  },
};

export function apiLoadNotes() {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      resolve({ ...mockresponse });
      clearTimeout(timeout);
    }, 1000);
  });
}

export function apiAddNote() {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      resolve({
        data: "yeah added",
        meta: {
          http_code: 200,
          message: "success",
        },
      });
      clearTimeout(timeout);
    }, 1000);
  });
}

export function apiUpdateNote() {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      resolve({
        data: "yeah updated",
        meta: {
          http_code: 200,
          message: "success",
        },
      });
      clearTimeout(timeout);
    }, 1000);
  });
}
