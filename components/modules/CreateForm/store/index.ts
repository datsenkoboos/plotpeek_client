import { defineStore } from 'pinia';
import create from '../api/create';
import generate from '../api/generate';

const useCreateStore = defineStore('create', {
  state: (): {
    data: {
      name: string;
      description: string;
      author: string;
      volume: 1 | 2 | 3;
      content: string;
    };
    error: {
      state: boolean;
      statusCode: number | null;
    };
    pending: boolean;
    page: 0 | 1;
  } => {
    return {
      data: {
        name: '',
        description: '',
        author: '',
        volume: 1,
        content: '',
      },
      error: {
        state: false,
        statusCode: null,
      },
      pending: false,
      page: 0,
    };
  },
  actions: {
    closeRequestErrorOuput() {
      this.error.state = false;
      setTimeout(() => {
        this.error.statusCode = null;
      }, 200);
    },
    setCreateData(data: typeof this.data) {
      Object.assign(this.data, data);
    },
    setPage(value: 0 | 1) {
      this.page = value;
    },
    setPending(value: boolean) {
      this.pending = value;
    },
    setContent(value: string) {
      this.data.content = value;
    },
    async generate(data: typeof this.data) {
      this.setCreateData(data);
      this.setPage(1);
      try {
        this.setPending(true);
        const { data: content } = await generate(
          this.data.author,
          this.data.name,
          this.data.volume
        );
        this.setContent(content);
      } catch (error: any) {
        this.error.state = true;
        this.error.statusCode = error.response.status
          ? error.response.status
          : null;
      } finally {
        this.setPending(false);
      }
    },
    async regenerate() {
      try {
        this.setPending(true);
        const { data: content } = await generate(
          this.data.author,
          this.data.name,
          this.data.volume
        );
        this.setContent(content);
      } catch (error: any) {
        this.error.state = true;
        this.error.statusCode = error.response.status
          ? error.response.status
          : null;
      } finally {
        this.setPending(false);
      }
    },
    async create() {
      try {
        await create(this.data.author, this.data.name, this.data.volume, this.data.description, this.data.content)
      } catch (error: any) {
        console.log(error.message)
      }
    }
  },
});

export default useCreateStore;
