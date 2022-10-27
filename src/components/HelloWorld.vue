<template>
  <v-container class="pa-10">
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="posts"
          class="elevation-1"
          @click:row="getPost"
        >
          <template v-slot:item.postId="{ item }">
            {{ item.postId }}
          </template>
          <template v-slot:item.title="{ item }">
            {{ item.title }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span v-if="!isProtected(item.accessLevel)">
              <v-icon>mdi-lock</v-icon>
            </span>
          </template>
          <template v-slot:item.answerStatus="{ item }">
            <v-icon v-if="isAnswered(item.answerStatus)" color="green"
              >mdi-checkbox-marked</v-icon
            >
          </template>
          
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      headers: [
        {
          text: "인덱스",
          align: "start",
          sortable: true,
          value: "postId",
        },
        { text: "제목", value: "title", sortable: false, align: "start" },
        {
          text: "작성자",
          value: "authorName",
          sortable: false,
          align: "center",
        },        {
          text: "답변 여부",
          value: "answerStatus",
          sortable: false,
          align: "center",
        },
      ],
      posts: [
        {
          postId: 1,
          title: "게시글 1번",
          authorName: "최이섭",
          accessLevel: "PUBLIC",
          answerStatus: "ANSWERED",
        },
        {
          postId: 2,
          title: "게시글 2번",
          authorName: "이준표",
          accessLevel: "PROTECTED",
          answerStatus: "UNANSWERED",
        },        {
          postId: 3,
          title: "게시글 3번",
          authorName: "최이섭",
          accessLevel: "PUBLIC",
          answerStatus: "ANSWERED",
        },
        {
          postId: 4,
          title: "게시글 4번",
          authorName: "이준표",
          accessLevel: "PROTECTED",
          answerStatus: "UNANSWERED",
        },        {
          postId: 5,
          title: "게시글 5번",
          authorName: "최이섭",
          accessLevel: "PUBLIC",
          answerStatus: "UNANSWERED",
        },
        {
          postId: 6,
          title: "게시글 2번",
          authorName: "이준표",
          accessLevel: "PROTECTED",
          answerStatus: "UNANSWERED",
        },        {
          postId: 7,
          title: "게시글 1번",
          authorName: "최이섭",
          accessLevel: "PUBLIC",
          answerStatus: "ANSWERED",
        },
        {
          postId: 8,
          title: "게시글 2번",
          authorName: "이준표",
          accessLevel: "PROTECTED",
          answerStatus: "ANSWERED",
        },        {
          postId: 1,
          title: "게시글 1번",
          authorName: "최이섭",
          accessLevel: "PUBLIC",
          answerStatus: "ANSWERED",
        },
        {
          postId: 2,
          title: "게시글 2번",
          authorName: "이준표",
          accessLevel: "PROTECTED",
          answerStatus: "ANSWERED",
        },        {
          postId: 1,
          title: "게시글 1번",
          authorName: "최이섭",
          accessLevel: "PUBLIC",
          answerStatus: "UNANSWERED",
        },
        {
          postId: 2,
          title: "게시글 2번",
          authorName: "이준표",
          accessLevel: "PROTECTED",
          answerStatus: "ANSWERED",
        },        {
          postId: 1,
          title: "게시글 1번",
          authorName: "최이섭",
          accessLevel: "PUBLIC",
          answerStatus: "UNANSWERED",
        },
        {
          postId: 2,
          title: "게시글 2번",
          authorName: "이준표",
          accessLevel: "PROTECTED",
          answerStatus: "UNANSWERED",
        },        {
          postId: 1,
          title: "게시글 1번",
          authorName: "최이섭",
          accessLevel: "PUBLIC",
          answerStatus: "UNANSWERED",
        },
        {
          postId: 2,
          title: "게시글 2번",
          authorName: "이준표",
          accessLevel: "PROTECTED",
          answerStatus: "UNANSWERED",
        },
      ],
    };
  },
  name: "HelloWorld",
  computed: {},
  methods: {
    ...mapActions(["getInfo"]),
    al: () => {
      alert("test");
    },
    getColor(calories) {
      if (calories > 400) return "red";
      else if (calories > 200) return "orange";
      else return "green";
    },
    isProtected(accessLevel) {
      if (accessLevel === "PROTECTED") return true;
      else return false;
    },
    isAnswered(answerStatus) {
      if (answerStatus === "ANSWERED") return true;
      else return false;
    },
    getPost(item) {
      alert(`${item.postId}`);
    },
  },
};
</script>